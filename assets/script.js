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
const prevBtn = document.querySelector(".arrow_left");
const nextBtn = document.querySelector(".arrow_right");

// On récupère la div des points du slider
const dots = document.querySelector(".dots");

// On récupère l'image du slider
const bannerImg = document.querySelector(".banner-img");

// On récupère la tagline
const bannerTagline = document.querySelector("#banner p");

// Slide séléctionnée
let currentSlide = 0;

// Ajout des points par élément dans le carrousel
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span"); // On créé un bouton 
	dot.classList.add("dot"); 	// On lui ajoute la classe .dot

	// Ajouter la classe dot_selected au premier point
	if(i === currentSlide) {
		dot.classList.add('dot_selected') 
	}

	dots.appendChild(dot); 	// On l'ajoute à la div parente .dots
}

// Ajout d'un event listener sur les flèches du carrousel
prevBtn.addEventListener("click", () => {
	goTo(currentSlide - 1);
})

nextBtn.addEventListener("click", () => {
	goTo(currentSlide + 1);
})

// Fonction pour changer d'image
function goTo(index) {
	if(index < 0) {
		currentSlide = slides.length - 1;
	} else if(index > slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide = index
	}

	// Parcours les enfants de la div dots pour ajouter/supprimer la classe dot_selected
	for(let i = 0; i < dots.children.length; i++) {
		dots.children[i].classList.toggle('dot_selected', i === currentSlide)
	}

	// On change la source de l'image en fonction de l'index
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;

	// On change la tagline en fonction de l'index
	bannerTagline.innerHTML = slides[currentSlide].tagLine;
}