document.getElementById("form_btn").addEventListener("click", () =>{
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_1uqzuxx";
    const templateID = "template_fclclpr";

    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";

                console.log(res);
                alert("Wysłano wiadomość");
            })
        .catch((err)=>console.log(err));
});

