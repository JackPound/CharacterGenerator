console.log('js linked');

// Getting baseline score for comparison to current score
const startingStrength = parseInt($('#strength')[0].textContent)
const startingDexterity = parseInt($('#dexterity')[0].textContent)
const startingConstitution = parseInt($('#constitution')[0].textContent)
const startingIntelligence = parseInt($('#intelligence')[0].textContent)
const startingWisdom = parseInt($('#wisdom')[0].textContent)
const startingCharisma = parseInt($('#charisma')[0].textContent)
// Declare skill with corresponding attribute score
let skillSet = {
	'athletics':strength,
	'mobility':dexterity,
	'stealth':dexterity,
	'trickery':dexterity,
	'knowledgeArcana':intelligence,
	'knowledgeWorld':intelligence,
	'loreNature':wisdom,
	'loreReligion':wisdom,
	'perception':wisdom,
	'persuasion':charisma,
	'useMagicDevice':charisma,
}
// Set bonus to skills based on current attribute score
function updateSkills(){
	for (skill in skillSet) {
		$('#'+skill)[0].textContent = Math.floor((parseInt(skillSet[skill].textContent - 10) / 2))
	}
}
// Check available Ability points
function availableAP(){
	return parseInt($('#abilityPoints')[0].textContent)
}
// Increase (currentAV) by 1
function incrementAbility(currentAV, attribute){
	$('#' + attribute)[0].textContent = currentAV + 1
}
// Decrease (currentAV) by 1
function decrementAbility(currentAV, attribute){
	$('#' + attribute)[0].textContent = currentAV - 1
}
// Reduces ability points by (value)
function reduceAbilityPool(value){
	$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - value))
}
function increaseAbilityPool(value){
	$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + value))
}
// Function for finding the starting value of the attribute being increased or decreased
function findStartingValue(attribute){
	let startingAttributeValue = ''
	if (attribute == 'strength'){
		startingAttributeValue = startingStrength
	} else if (attribute == 'dexterity') {
		startingAttributeValue = startingDexterity
	} else if (attribute == 'constitution') {
		startingAttributeValue = startingConstitution
	} else if (attribute == 'intelligence') {
		startingAttributeValue = startingIntelligence
	} else if (attribute == 'wisdom') {
		startingAttributeValue = startingWisdom
	} else if (attribute == 'charisma') {
		startingAttributeValue = startingCharisma
	}
	return startingAttributeValue
}
updateSkills()
// Button event handler for all button clicks (+ and - attributes)
$(':button').on("click", function(){
	let attribute = String($(this).parent()[0].className)
	let currentAV = parseInt($('#'+attribute)[0].textContent);
	let startingAV = findStartingValue(attribute)
	if (this.className == 'up'){
		let cost = (Math.floor((currentAV - startingAV)/2) + 1)
		if (cost < 1){
			cost = 1
		}
		if (cost <= 4 && availableAP() >= cost){
			incrementAbility(currentAV, attribute)
			reduceAbilityPool(cost)
			updateSkills()
		}
	}
	if (this.className == 'down' && currentAV > 7){
		let refund = Math.ceil((currentAV - startingAV)/2)
		if (refund <= 0){
			refund = 1
		}
		decrementAbility(currentAV, attribute)
		increaseAbilityPool(refund)
		updateSkills()
	}
});