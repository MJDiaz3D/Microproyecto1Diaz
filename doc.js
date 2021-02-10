
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    slideIndex++;
    
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,2000);
}


/*let img = document.querySelector("img"),
    slide = document.querySelector("slide"),
    imagenes = ["slider/imagen1.jpg","slider/imagen1.jpg","slider/imagen1.jpg"],
    i=0;

slide.addEventListener("click",function(){
    img.setAttribute('src', imagenes[i]);
    i++;
});
slide; */

/*const imagen = document.getElementById("slider");

let i=0

setInterval(function(){
    imagen.src=`slider/${i}.jpg`;
    
    if(i < 3){
        i++;
    }else{
        i=0;
    }
},2000)*/

