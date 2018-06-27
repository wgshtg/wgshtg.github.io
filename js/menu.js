var menu_check = document.getElementById('menu-check');

var close = function(){
	menu_check.checked = false;
}

document.getElementById('menu-home').addEventListener("click", close);
document.getElementById('menu-about').addEventListener("click", close);
document.getElementById('menu-moves').addEventListener("click", close);
document.getElementById('menu-memories').addEventListener("click", close);
document.getElementById('menu-friends').addEventListener("click", close);
