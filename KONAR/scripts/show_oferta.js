// KARTY Z OFERTAMI
const tarcicaCard = document.getElementById("tarcica");
const okleinyCard = document.getElementById("okleiny");
const elMebloweCard = document.getElementById("el_meblowe");
const podlogiCard = document.getElementById("podlogi");

// Wyświetlanie kontenera z opisem
const descContainer = document.getElementById("description_container");
const card = document.querySelector(".card-container").querySelectorAll(".card");

card.forEach(element =>{
    element.addEventListener("click", () =>{
        var elementId = element.getAttribute("id");

       switch (elementId){
        case "tarcica":
            if(descContainer.className === "active"){
                descContainer.className = "";
            } 
            if(tarcicaCard.className === "card"){
                tarcicaCard.classList.add("active");
                okleinyCard.className = "card";
                elMebloweCard.className = "card";
                podlogiCard.className = "card";
                setTimeout(() => {
                    descContainer.classList.add("active");
                }, 1000);
                
                    
                
            } else {
                tarcicaCard.className = "card";
                descContainer.className = "";
            }
            break;
       
       case "okleiny":
        descContainer.className = "";
            if(okleinyCard.className === "card"){
                okleinyCard.classList.add("active");
                tarcicaCard.className = "card";
                elMebloweCard.className = "card";
                podlogiCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                }
            } else {
                okleinyCard.className = "card";
                descContainer.className = "";
            }
            break;

        case "el_meblowe":
            descContainer.className = "";
            if(elMebloweCard.className === "card"){
                elMebloweCard.classList.add("active");
                okleinyCard.className = "card";
                tarcicaCard.className = "card";
                podlogiCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                }
            } else {
                elMebloweCard.className = "card";
                descContainer.className = "";
            }
            break;

        case "podlogi":
            descContainer.className = "";
            if(podlogiCard.className === "card"){
                podlogiCard.classList.add("active");
                okleinyCard.className = "card";
                tarcicaCard.className = "card";
                elMebloweCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                }
            } else {
                podlogiCard.className = "card";
                descContainer.className = "";
            }
            break;
       }
        
        
    })
})



