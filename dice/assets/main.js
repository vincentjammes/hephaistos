function getDice() {
	var $input = $('[name=howmuch]');
	return $input.val();
};


$(function() {

	$("#form1").on('submit', function (event) {
		event.preventDefault();
		var value = getDice();
		console.log(value);
	})

});
