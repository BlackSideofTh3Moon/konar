/* 
            ------------
            ---OFERTA---
            ------------    
*/

// Karuzela zdjęć do kart w seksji OFERTA
const cardBg = [
    document.getElementById("tarcica"),
    document.getElementById("okleiny"),
    document.getElementById("el_meblowe"),
    document.getElementById("podlogi")
];
cardBg.forEach(element =>{

    var elementId = element.getAttribute("id");
    var slideTime = 6000; // 6 sekund
    var images = [];
    var i = 0;
    
    images[0] = '../KONAR/images/' + elementId + '/1.jpg';
    images[1] = '../KONAR/images/' + elementId + '/2.jpg';
    images[2] = '../KONAR/images/' + elementId + '/3.jpg';
    function changePicture(){
            document.getElementById(elementId).style.backgroundImage = "url(" + images[i] + ")";
    
            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            } 
            setTimeout(changePicture, slideTime);
    }
        document.getElementById("oferta").onload = changePicture();

});
 
/*
            -------------
            ---KONTAKT---
            -------------
*/

// ---Formularz---

// Najechanie na przycisk kursorem
document.getElementById("form_btn").addEventListener("mouseover", () =>{
    document.getElementById("form_btn_bg").style.height = "48px";
    document.querySelector("#form_btn a").style.color = "var(--primary-white)";
});

// Zjechanie z przycisku kursorem
document.getElementById("form_btn").addEventListener("mouseleave", () =>{
    if(document.body.offsetWidth >= 992){
        document.getElementById("form_btn_bg").style.height = "4px";
        document.querySelector("#form_btn a").style.color = "var(--primary-dark)";
    }
});   

/*
            ------------
            ---STOPKA---
            ------------
*/

document.querySelector("footer a").addEventListener("click", () =>{
    $('html, body').animate({
        scrollTop: $('body').offset().top = 0
    }, 1500, '');
});