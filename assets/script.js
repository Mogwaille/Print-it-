// Déclaration du tableau des slides
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine :"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image :"slide4.png",
		tagLine :"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des constantes et de la variable
const arrowLeft = document.getElementById("arrow-left")
const arrowRight = document.getElementById("arrow-right")
const dots = document.querySelectorAll(".dot")
const bannerImg = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")
let compteur = 0

// Fonction pour changer le point selectionné
function changeSelectedDot(){
    dots.forEach(dot => dot.classList.remove("dot_selected"))
    dots[compteur].classList.add("dot_selected")
}

// Fonction pour changer l'image, le paragraphe et le alt
function carouselChange(){
    bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`
    bannerImg.alt = slides[compteur].tagLine
    tagLine.innerHTML = slides[compteur].tagLine
}

//Évènement au clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
    compteur--
    if(compteur < 0){
        compteur = slides.length-1
    }
    carouselChange()
    changeSelectedDot()
})

//Évènement au clic sur la flèche droite
arrowRight.addEventListener("click", function () {
    compteur++
    if(compteur == slides.length){
        compteur = 0
    }
    carouselChange()
    changeSelectedDot()
})

//Réinitialisation du carousel à l'actualisation de la page
carouselChange(0)