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

// Déclaration des flèches
let arrowLeft = document.getElementById("arrow-left")

let arrowRight = document.getElementById("arrow-right")

// Fonction pour changer les points
function changeSelectedDot(direction) {
    const dots = document.querySelectorAll('.dot')
    const dotSelected = document.querySelector('.dot_selected')
    const indexSelected = Array.from(dots).indexOf(dotSelected)
    let indexNew
    if (direction === "left") {
        indexNew = (indexSelected - 1 + dots.length) % dots.length
    } else if (direction === "right") {
        indexNew = (indexSelected + 1) % dots.length
    }
    dotSelected.classList.remove("dot_selected")
    dots[indexNew].classList.add("dot_selected")
	carouselChange(indexNew)
}

arrowLeft.addEventListener("click", () => {
    changeSelectedDot("left")
})

arrowRight.addEventListener("click", () => {
    changeSelectedDot("right")
})

// Fonction pour changer le carousel
function carouselChange(index) {
    const bannerImg = document.querySelector(".banner-img")
    const tagLine = document.querySelector("#banner p")
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`
    bannerImg.alt = slides[index].tagLine
    tagLine.innerHTML = slides[index].tagLine
}

carouselChange(0)