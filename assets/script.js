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

const FlecheGauche = document.querySelector(".arrow_left")
const FlecheDroite = document.querySelector(".arrow_right")

for (let i=1; i<5; i++) {
	let point = document.createElement('span')
	point.classList = "dot"
	point.id = "point" + i
	document.querySelector(".dots").appendChild(point)
}

let currentslide = document.querySelector(".banner-img")
let currentTagline = document.querySelector("p")

let i=0
let currentBulletPoint = document.getElementById("point1")
	currentBulletPoint.classList = "dot dot_selected"

	FlecheDroite.addEventListener('click' , function() {
		if (i<=(slides.length-2)) {
			currentslide.src = "./assets/images/slideshow/"+slides[i+1].image
			currentTagline.innerHTML = slides[i+1].tagLine
			const ancienBulletPoint=document.getElementById("point" +(i+1))
			ancienBulletPoint.className="dot"
			currentBulletPoint = document.getElementById("point" + (i+2))
			currentBulletPoint.classList = "dot dot_selected"
			
			i++
		}

		else if (i>=(slides.length-1)){
			i=0
			currentBulletPoint = document.getElementById("point1")
			currentBulletPoint.classList = "dot dot_selected"
			const ancienBulletPoint=document.getElementById("point4")
			ancienBulletPoint.className="dot"
			currentslide.src = "./assets/images/slideshow/"+slides[0].image
			currentTagline.innerHTML = slides[0].tagLine
		} 
	})

	FlecheGauche.addEventListener('click' , function() {
		if(i>=1) {
			currentslide.src = "./assets/images/slideshow/"+slides[i-1].image
			currentTagline.innerHTML = slides[i-1].tagLine
			const ancienBulletPoint=document.getElementById("point" +(i+1))
			ancienBulletPoint.className="dot"
			currentBulletPoint = document.getElementById("point" + i)
			currentBulletPoint.classList = "dot dot_selected"
			
			i--
		}

		else if (i<=1){
			i=3
			currentslide.src = "./assets/images/slideshow/"+slides[3].image
			currentTagline.innerHTML = slides[3].tagLine
			currentBulletPoint = document.getElementById("point4")
			currentBulletPoint.classList = "dot dot_selected" 
			const ancienBulletPoint=document.getElementById("point1")
			ancienBulletPoint.className="dot" 
		} 
	});