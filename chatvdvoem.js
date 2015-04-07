var header = $('#header');
header.find('h2').remove();
var custom = $('<div>');
header.find('h1').after(custom);
var restart = $('<button>');
restart.text('Restart');
restart.click(function() {
	chat_stop();
	setTimeout(function() {
		$('#chat_start').click();
	}, 500);
});
custom.append(restart);
