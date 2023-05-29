let images = [...document.querySelectorAll(".img")];
let slider = document.querySelector(".slider");
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) =>{
    img.style.backgroundImage = `url(../KONAR/images/gallery/${idx+1}.jpg)`;
});

function lerp(start, end, t){
    return start * (1-t) + end * t;
}