var img_group = document.getElementById('img-group');
var i;
for(i=1; i<=151; i++){
	var img_num = i > 99 ? `${i}` : i > 9 ? `0${i}` : `00${i}`; 
 //    fetch(`https://www.serebii.net/pokemongo/pokemon/${img_num}.png`, {method: 'get', mode: 'no-cors'})
	// 	.then(function(response) {
	// 		console.log(response);
			
	// 	}).catch(function(err) {
 //    		console.log(i+"失敗");
	// })	
	var a = document.createElement("a");
	var img = document.createElement("img");
	// img.setAttribute("src", `https://www.serebii.net/pokemongo/pokemon/${img_num}.png`);
	img.src = `https://www.serebii.net/pokemongo/pokemon/${img_num}.png`;
	a.className = "img-item";
	a.appendChild(img);
	console.log(a);
	document.getElementById('img-group').appendChild(a);
	
	// document.getElementById("placehere").appendChild(elem);
}