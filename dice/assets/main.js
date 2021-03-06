function getDice() {
	var $input = $('[name=howMuch]');
   	return $input.val();
};

function getMoreThan() {
	var $input = $('[name=moreThan]');
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
		var valueGetDice = getDice();
		console.log("valueGetDice", valueGetDice);
		var throwDice = rollDice(valueGetDice);
		console.log("throwDice", throwDice);
		var sortDice = updateSortDice(throwDice);
		$('#face1').html(sortDice[1]);
		$('#face2').html(sortDice[2]);
		$('#face3').html(sortDice[3]);
		$('#face4').html(sortDice[4]);
		$('#face5').html(sortDice[5]);
		$('#face6').html(sortDice[6]);
		var moreThan = getMoreThan();
		var count = computeCount(sortDice, moreThan);
		$('#count').html("Il y a "+ count +" résultats correspondant à ce filtre.");
		console.log("count", count);
	})
});