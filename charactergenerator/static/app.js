if(window.location.pathname == '/kingmaker-builder/newcharacter/',/^[0-9]*$/gm) {
	console.log('app.js linked');

	let skillSet = {
		'athletics':'strength',
		'mobility':'dexterity',
		'stealth':'dexterity',
		'trickery':'dexterity',
		'knowledgeArcana':'intelligence',
		'knowledgeWorld':'intelligence',
		'loreNature':'wisdom',
		'loreReligion':'wisdom',
		'perception':'wisdom',
		'persuasion':'charisma',
		'useMagicDevice':'charisma',
	}
	let upgradeCost = {
		7:2,
		8:1,
		9:1,
		10:1,
		11:1,
		12:1,
		13:2,
		14:2,
		15:3,
		16:3,
		17:4,
	}
	let abilityRefund = {
		8:2,
		9:1,
		10:1,
		11:1,
		12:1,
		13:1,
		14:2,
		15:2,
		16:3,
		17:3,
		18:4,
	}
	let skillSpent = {
		'athletics':0,
		'mobility':0,
		'stealth':0,
		'trickery':0,
		'knowledgeArcana':0,
		'knowledgeWorld':0,
		'loreNature':0,
		'loreReligion':0,
		'perception':0,
		'persuasion':0,
		'useMagicDevice':0,
	}
	let attributeSet = ['strength','dexterity','constitution','intelligence','wisdom','charisma']
	// Set bonus to skills based on current attribute score
	function updateSkills(){
		for (skill in skillSet) {
			$('#'+skill)[0].textContent = (Math.floor((parseInt($('#'+skillSet[skill]+'Total')[0].textContent - 10) / 2))) + skillSpent[skill]
		}
	}
	// Check unspent ability points value
	function availableAP(){
		return parseInt($('#abilityPoints')[0].textContent)
	}
	// Modify unspent ability points value
	function modifyAbilityPool(value){
		$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + value))
	}
	// Modify specific ability score
	function modifyAbilityScore(currentAV, attribute, change){
		newAV = currentAV + change
		$('#' + attribute)[0].textContent = newAV
		$('#' + attribute + 'Total')[0].innerHTML = newAV + parseInt($('#' + attribute + 'Bonus')[0].textContent)
	}
	// Calculate racial + base for all attributes on load
	function onLoadAbility(){
		for (attribute in attributeSet) {
			$('#' + attributeSet[attribute] + 'Total')[0].innerHTML = 10 + parseInt($('#' + attributeSet[attribute] + 'Bonus')[0].textContent)
		}
		calculateModifiers()
		updateSkills()
		baseSkillPoints = parseInt($('#skillPointsPerLevel')[0].innerHTML)
		if($('#isSkilled')[0]){
			baseSkillPoints += 1
		}
		setSkillPoints()
		validButtons()
	}
	function calculateModifiers(){
		for (attribute in attributeSet){
			let aboveTen = parseInt($('#' + attributeSet[attribute] + 'Total')[0].textContent) - 10
			let modifier = Math.floor(aboveTen/2)
			$('#' + attributeSet[attribute] + 'Modifier')[0].innerHTML = modifier
		}
	}
	function setSkillPoints(){
		let pointsToSpend = Math.ceil(baseSkillPoints + (.5 * parseInt($('#intelligenceModifier')[0].textContent)))
		let pointsSpent = 0
		for (points in skillSpent){
			pointsSpent += skillSpent[points]
		} 
		$('#skillPoints')[0].innerHTML = pointsToSpend - pointsSpent
	}
	function availableSkillPoints(){
		let availableSP = parseInt($('#skillPoints')[0].innerHTML)
		return availableSP
	}
	function modifySkillPool(x){
		$('#skillPoints')[0].innerHTML = availableSkillPoints() + x
	}
	function validButtons(){
		for (skill in skillSpent){
			if (skillSpent[skill] < 1) {
				$('#'+skill)[0].previousElementSibling.disabled = true
			} else {
				$('#'+skill)[0].previousElementSibling.disabled = false
			}
		}
	}
	onLoadAbility()


	// On click for all ability modifying buttons + and - ability score
	$('.abilityScores :button').on("click", function(){
		let attribute = String($(this).parent().parent()[0].classList[0])
		let currentAV = parseInt($('#'+attribute)[0].textContent)
		if (this.classList[0] == 'up' && currentAV < 18){
			let cost = upgradeCost[currentAV]
			if (cost <= availableAP()) {
				modifyAbilityScore(currentAV, attribute, 1)
				modifyAbilityPool(-cost)
				updateSkills()
				calculateModifiers()
				availableSkillPoints()
				setSkillPoints()
				this.previousElementSibling.previousElementSibling.disabled = false
				if (currentAV == 17) {
					this.disabled = true
				}
			}
		}
		if (this.classList[0] == 'down' && currentAV > 7){
			let cost = abilityRefund[currentAV]
			modifyAbilityScore(currentAV, attribute, -1)
			modifyAbilityPool(cost)
			updateSkills()
			calculateModifiers()
			availableSkillPoints()
			setSkillPoints()
			this.nextElementSibling.nextElementSibling.disabled = false
			if (currentAV == 8) {
				this.disabled = true
			}
		}
	});
	$('.skillScores :button').on("click", function(){
		if (this.className == 'upSkill' && availableSkillPoints() > 0){
			let clickedSkill = this.previousElementSibling.id
			skillSpent[clickedSkill] += 1
			this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML) + 1
			validButtons()
			modifySkillPool(-1)

		}
		if (this.className == 'downSkill' && skillSpent[this.nextElementSibling.id] > 0){
			let clickedSkill = this.nextElementSibling.id
			skillSpent[clickedSkill] -= 1
			this.nextElementSibling.innerHTML = parseInt(this.nextElementSibling.innerHTML) - 1
			validButtons()
			modifySkillPool(1)
		}
	})
}

