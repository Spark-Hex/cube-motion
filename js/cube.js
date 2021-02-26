
function title_drop(n) {
	var el = document.getElementById("tl" + n);
	if(el === null) return;

	el.className = "";
	setTimeout(function(){ el.className = "drop"; }, 20);
}

function init_animation() {

	var length = 5;

	function call_animation() {
		var time = (0.9 + (Math.random()/2)) * 1000;
		var el_played = Math.floor(Math.random() * (length + 1));

		title_drop(el_played);
		setTimeout(call_animation, time);
	}

	setTimeout(call_animation, 900);
}

init_animation();


