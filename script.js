document.body.style.background = "#ECEBE5";
/* setting the background-color property of the body element */
function clickMe(){
	image1.classList.add("clicked")
	image2.classList.remove("clicked")
	image3.classList.remove("clicked")
	let p = document.querySelector("#bio");
	p.innerHTML = "I am a 2000 baby, the year of dragons. I am also a scorpio. Currently home in Atlanta, hopefully moving back to nyc soon. "
};
let me = document.querySelector("#image1");
me.addEventListener("click", clickMe);

function clickKorea(){
	image2.classList.add("clicked")
	image3.classList.remove("clicked")
	image1.classList.remove("clicked")
	let p = document.querySelector("#bio");
	p.innerHTML = "I was born in South Korea & grew up in Jeonju til '07."
};
let korea = document.querySelector("#image2");
korea.addEventListener("click", clickKorea);


function clickBoba(){
	image3.classList.add("clicked")
	image1.classList.remove("clicked")
	image2.classList.remove("clicked")
	let p = document.querySelector("#bio");
	p.innerHTML = "My favorite dessert spot is Meet Fresh. Their teas & grass jelly & shaved ice is to die for."
};
let boba = document.querySelector("#image3");
boba.addEventListener("click", clickBoba);





