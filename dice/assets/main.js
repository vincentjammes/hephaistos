function getDice() {
	var $input = $('[name=howmuch]');
	return $input.val();
};

function getMoreThan() {
	var $input = $('[name=morethan]');
	return $input.val();
};

function rollDice(n){ 
	var dice = {};
	for (var i=1 ; i<=n ; i++ ){
        dice[i] = Math.ceil(6*Math.random());
	}
  	return dice;
};

function updateSortDice (throwDice) {
	var sortDice = {"1":0, "2":0, "3":0, "4":0, "5":0, "6":0};
	for (var key in throwDice) {
		var value = throwDice[key];
		sortDice[value]++;
	}
	console.log("sortDice", sortDice);
	return sortDice;
};

function computeCount (sortDice, moreThan){
	var count = 0;
	for (var face in sortDice) {
		var value = sortDice[face];
		if (parseInt(face) >= moreThan) {
			count += value; 
		}
	}
	return count;
};

$(function() {

	$("#form1").on('submit', function (event) {
		event.preventDefault();
		var value = getDice();
		console.log(value);
		var throwDice = rollDice(value);
		console.log("throwDice", throwDice);
		var sortDice = updateSortDice(throwDice);
		var count = computeCount(sortDice, 4);
		console.log("count", count);
	})
});

