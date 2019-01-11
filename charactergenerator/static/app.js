console.log('js linked');

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
// Set bonus to skills based on current attribute score
function updateSkills(){
	for (skill in skillSet) {
		$('#'+skill)[0].textContent = Math.floor((parseInt($('#'+skillSet[skill])[0].textContent - 10) / 2))
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
	$('#' + attribute)[0].textContent = currentAV + change
}
// On click for all ability modifying buttons + and - ability score
$('.abilityScores :button').on("click", function(){
	let attribute = String($(this).parent()[0].className)
	let currentAV = parseInt($('#'+attribute)[0].textContent)
	if (this.className == 'up' && currentAV < 18){
		let cost = upgradeCost[currentAV]
		if (cost <= availableAP()) {
			modifyAbilityScore(currentAV, attribute, 1)
			modifyAbilityPool(-cost)
			updateSkills()
		}
	}
	if (this.className == 'down' && currentAV > 7){
		let cost = abilityRefund[currentAV]
		modifyAbilityScore(currentAV, attribute, -1)
		modifyAbilityPool(cost)
		updateSkills()
	}
});