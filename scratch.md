	{% for ability in abilities %}
			<input type="submit" value="-" name="{{ability}}_subtract">
			<p style="display:inline;">{{ability}}: {{ability_score}}</p>
			<input type="hidden" value={{ability_score}} name="currentvalue">
			<input type="submit" value="+" name="{{ability}}_add">
			<hr />
			{% endfor %}

//FIRST ITERATION OF ABILITY +
	// currentStrength = parseInt($('#strength')[0].textContent);
	// if (startingStrength + 1 >= currentStrength) {
	// 	$('#strength')[0].textContent = currentStrength + 1
	// 	$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 1))
	// 	console.log('this costs 1 point')
	// }
	// else if (startingStrength + 3 >= currentStrength) {
	// 	$('#strength')[0].textContent = String((parseInt($('#strength')[0].textContent) + 1))
	// 	$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 2))
	// 	console.log('this costs 2 points')
	// }
	// else if (startingStrength + 5 >= currentStrength) {
	// 	$('#strength')[0].textContent = String((parseInt($('#strength')[0].textContent) + 1))
	// 	$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) - 3))
	// 	console.log('this costs 3 points')
	// }
//FIRST ITERATION OF ABILITY -
$('#down').on("click", function(){
	currentStrength = parseInt($('#strength')[0].textContent);
	if (startingStrength + 2 >= currentStrength) {
		$('#strength')[0].textContent = String((parseInt($('#strength')[0].textContent) - 1))
		$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 1))
		console.log('this refunds 1 point')
	}
	else if (startingStrength + 4 >= currentStrength){
		$('#strength')[0].textContent = String((parseInt($('#strength')[0].textContent) - 1))
		$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 2))
		console.log('this refunds 2 points')		
	}
	else if (startingStrength + 6 >= currentStrength){
		$('#strength')[0].textContent = String((parseInt($('#strength')[0].textContent) - 1))
		$('#abilityPoints')[0].textContent = String((parseInt($('#abilityPoints')[0].textContent) + 3))
		console.log('this refunds 3 points')		
	}
});