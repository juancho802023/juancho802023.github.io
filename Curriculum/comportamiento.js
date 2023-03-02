

    
    const nombre = document.getElementById("nombre");
 
    const email = document.getElementById("email");

    const btn = document.getElementsByName("enviar");
   

//const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

document.getElementsByName('enviar').value.addEventListener('click', function() { 

  
    let entrar = true;
    let warnings="";
    let regexEmail= (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    
    

    if(nombre.value.length < 6){
        warnings += "El nombre no es válido <br>";
        entrar=true;
    }

    if(!regexEmail.test(email.value)){
        warnings+="El email no es válido <br>";
        entrar=true;
    }

    if(entrar){
        parrafo.innerHTML=warnings;
    }


});


