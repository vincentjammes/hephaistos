function getDice() {
	var $input = $('[name=howmuch]');
	return $input.val();
};

function rollDice(n){ 
	var dice = {};
	for (var i=1 ; i<=n ; i++ ){
        dice[i] = Math.ceil(6*Math.random());
    }
    return dice;
};

var sortDice = {"1":0, "2":0, "3":0, "4":0, "5":0, "6":0}
for (var a in sortDice) {
	switch(sortDice) {
		case 1: 
		sortDice["1"]++
		break;

		case 2: 
		sortDice["2"]++
		break;

		case 3: 
		sortDice["3"]++
		break;

		case 4: 
		sortDice["4"]++
		break;

		case 5: 
		sortDice["5"]++
		break;

		case 6: 
		sortDice["6"]++
	}
}


$(function() {

	$("#form1").on('submit', function (event) {
		event.preventDefault();
		var value = getDice();
		console.log(value);
		var throwDice = rollDice(value)
		console.log(throwDice);
		console.log(sortDice);
	})
});




