var currentSlideId, nextSlide, nextSlideId, previousSlide, previousSlideId;
var currentSlide = 0;

function nextSlide(windowWidth, slideArray) {
	previousSlideId = slideArray[currentSlide] ? slideArray[currentSlide] : slideArray[slideArray.length - 1];
	currentSlideId = slideArray[currentSlide + 1] ? slideArray[currentSlide + 1] : slideArray[0];
	currentSlide = slideArray[currentSlide + 1] ? currentSlide + 1 : 0;
	nextSlideId = currentSlide >= slideArray.length - 1 ? slideArray[0] : slideArray[currentSlide + 1];

	document.getElementById(previousSlideId).style.left = "-" + windowWidth + "px";
	document.getElementById(currentSlideId).style.zIndex = 5;
	document.getElementById(currentSlideId).style.left = 0;
	document.getElementById(nextSlideId).style.zIndex = 1;
	document.getElementById(nextSlideId).style.left = windowWidth + "px";
}

function previousSlide(windowWidth, slideArray) {
	nextSlideId = slideArray[currentSlide] ? slideArray[currentSlide] : slideArray[0];
	currentSlideId = slideArray[currentSlide - 1] ? slideArray[currentSlide - 1] : slideArray[slideArray.length - 1];
	currentSlide = slideArray[currentSlide - 1] ? currentSlide - 1 : slideArray.length - 1;

	previousSlideId = currentSlide <= 0 ? slideArray[slideArray.length-1] : slideArray[currentSlide - 1];

	document.getElementById(nextSlideId).style.left = windowWidth + "px";
	document.getElementById(currentSlideId).style.zIndex = 5;
	document.getElementById(currentSlideId).style.left = 0;
	document.getElementById(previousSlideId).style.zIndex = 1;
	document.getElementById(previousSlideId).style.left = "-" + windowWidth + "px";
}


window.onload = function(){
	var windowWidth = window.innerWidth;
	var charlieSlider = document.getElementById('slider');
	var charlieSliderPlace = 0;
	var currentSlide = 1;
	var slideArray = new Array;

	charlieSlider.style.width = windowWidth + "px";

	var slides = document.getElementsByClassName('slide');
	for(i=0; i < slides.length; i++){
	  slides[i].style.width = windowWidth + "px";
	  slideArray.push(slides[i].getAttribute('id'));
	  if(i != 0 && i != slides.length ){
	    slides[i].style.left = windowWidth + "px";
	  }
	  slides[0].style.left = 0;
	}

	document.getElementById('slide4').style.left = "-" + windowWidth + "px";

	console.log(slideArray);

	var myInterval = setInterval(function(){ 
	  nextSlide(windowWidth, slideArray);
	}, 5000);

	document.getElementById('slider-next').onclick = function(){
	  nextSlide(windowWidth, slideArray);
	  clearInterval(myInterval);
	}
	document.getElementById('slider-previous').onclick = function(){
	  previousSlide(windowWidth, slideArray);
	  clearInterval(myInterval);
	}


}