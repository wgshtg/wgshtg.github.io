var img_group = document.getElementById('img-group');
var i;
var arr = Array.apply(null, new Array(151));
arr.map((elem, index) => index + 1);
for (i = 1; i <= 5; i++) {
	var img_num = Math.floor((Math.random() * 151) + 1);
	fetch(`https://pokeapi.co/api/v2/pokemon/${img_num}/`)
	  .then(response => response.json())
	  .then(pm => {
		  // pm.sprites.front_default
		  // its sprities are suck, so use its id to get other website img src
		  console.log(pm.sprites.front_default);
		  var id = pm.id > 99 ? pm.id : pm.id > 9 ? `0${pm.id}` :  `00${pm.id}`;
		create(`https://www.serebii.net/pokemongo/pokemon/${id}.png`);
	})
	.catch(error => console.error(error));
}

function create(img_src) {
	var img = document.createElement("img");
	img.src = img_src;
	img.setAttribute("class", "img-item");
	console.log(img);
	document.getElementById('img-group').appendChild(img);
}