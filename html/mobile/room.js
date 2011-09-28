/**
 * room
 *
 */

// 命名空间 
if (typeof room != 'object')
	room = {} 
 
// 连接到房间
var socket = io.connect('/random');

// 按回车发送
var _last_input_message = '';
$('#message').keydown(function (e) {
	// 回车
	if (e.keyCode == 13) {
		_last_input_message = $('#message').val();
		room.sendMessage();
		return false;
	}
	// 上方向键
	if (e.keyCode == 38) {
		$('#message').val(_last_input_message);
	}
});