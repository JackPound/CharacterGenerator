console.log('js linked');

// Getting baseline score for comparison to current score
const startingStrength = parseInt($('#strength')[0].textContent)
const startingDexterity = parseInt($('#dexterity')[0].textContent)
const startingConstitution = parseInt($('#constitution')[0].textContent)
const startingIntelligence = parseInt($('#intelligence')[0].textContent)
const startingWisdom = parseInt($('#wisdom')[0].textContent)
const startingCharisma = parseInt($('#charisma')[0].textContent)
// Button event handler for all button clicks (+ and - attributes)
$(':button').on("click", function(){
	var attribute = String($(this).parent()[0].className)
	let currentAttribute = parseInt($('#'+attribute)[0].textContent);
	let startingAttribute = ''
	// Determining which attribute we're changing
	if (attribute == 'strength'){
		startingAttribute = startingStrength
	} else if (attribute == 'dexterity') {
		startingAttribute = startingDexterity
	} else if (attribute == 'constitution') {
		startingAttribute = startingConstitution
	} else if (attribute == 'intelligence') {
		startingAttribute = startingIntelligence
	} else if (attribute == 'wisdom') {
		startingAttribute = startingWisdom
	} else if (attribute == 'charisma') {
		startingAttribute = startingCharisma
	}
	// Increasing attributes
	if (this.className == 'up'){
		// Determinging how many Unspent points are needed to increase the ability
		if (startingAttribute + 1 >= currentAttribute && parseInt($('#abilityPoints')[0].textContent) >= 1) {
			$('#' + attribute)[0].textContent = currentAttribute + 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 1))
		} else if (startingAttribute + 3 >= currentAttribute && parseInt($('#abilityPoints')[0].textContent) >= 2) {
			$('#' + attribute)[0].textContent = currentAttribute + 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 2))
		} else if (startingAttribute + 5 >= currentAttribute && parseInt($('#abilityPoints')[0].textContent) >= 3) {
			$('#' + attribute)[0].textContent = currentAttribute + 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 3))
		} else if (startingAttribute + 7 >= currentAttribute && parseInt($('#abilityPoints')[0].textContent) >= 4) {
			$('#' + attribute)[0].textContent = currentAttribute + 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 4))
		}
	}
	// Decreasing attributes (cannot fall below 3)
	if (this.className == 'down' && currentAttribute > 3){
		// Determining how many points are refunded based on how many have already been spent in this attribute
		if (startingAttribute + 2 >= currentAttribute) {
			$('#' + attribute)[0].textContent = currentAttribute - 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 1))
		} else if (startingAttribute + 4 >= currentAttribute) {
			$('#' + attribute)[0].textContent = currentAttribute - 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 2))
		} else if (startingAttribute + 6 >= currentAttribute) {
			$('#' + attribute)[0].textContent = currentAttribute - 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 3))
		} else if (startingAttribute + 8 >= currentAttribute) {
			$('#' + attribute)[0].textContent = currentAttribute - 1
			$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 4))
		}
	}
});