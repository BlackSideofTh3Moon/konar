const innerSlider = document.querySelector('.inner-slider');
const progressBar = document.querySelector('.progress-bar-inner');

let sliderGrabbed = false;

innerSlider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width  = `${getScrollPercentage()}%`
    console.log(getScrollPercentage());
})

innerSlider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    innerSlider.style.cursor = 'grabbing';
})

innerSlider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    innerSlider.style.cursor = 'grab';
})

innerSlider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

innerSlider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        innerSlider.parentElement.scrollLeft -= e.movementX;
    }
})

innerSlider.addEventListener('wheel', (e) =>{
    e.preventDefault()
    innerSlider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((innerSlider.parentElement.scrollLeft / (innerSlider.parentElement.scrollWidth - innerSlider.parentElement.clientWidth) ) * 100);
}

let images = [...document.querySelectorAll(".img")];
let slider = document.querySelector(".slider");
let prevLeft =0;

images.forEach((img, idx) =>{
    img.style.backgroundImage = `url(../KONAR/images/gallery/${idx+1}.jpg)`;
});
slider.addEventListener("scroll", () =>{
    images.forEach(img =>{
       img.style.transform = `translateX(-${getScrollPercentage()/2}px)`;
    })

    
});