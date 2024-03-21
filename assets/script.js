const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// On récupère les flèches du slider
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// On récupère la div des points du slider
const dots = document.querySelector(".dots");

// Slide séléctionnée
let currentSlide = 0;

// Ajout des points par élément dans le carrousel
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("button");
	dot.classList.add(".dot");
	dots.appendChild(dot);
}

// Ajout d'un event listener sur les flèches du carrousel
leftArrow.addEventListener("click", (event) => {
	goTo(currentSlide - 1)
	console.log("prev");
})

rightArrow.addEventListener("click", (event) => {
	goTo(currentSlide + 1)
	console.log("next");
})