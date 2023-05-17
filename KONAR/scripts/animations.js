/* 
            ------------
            ---OFERTA---
            ------------
            
    Karuzela zdjęć do kart w seksji OFERTA
*/
const cardBg = [
    document.getElementById("tarcica"),
    document.getElementById("okleiny"),
    document.getElementById("el_meblowe"),
    document.getElementById("podlogi")
];
cardBg.forEach(element =>{
    var elementId = element.getAttribute("id");
    var slideTime = 6000; // 3 seconds
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
        window.onload = changePicture();
        
 
});
 