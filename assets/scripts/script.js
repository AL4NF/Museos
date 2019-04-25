//Obtener los elemtos de la clase close

let links = document.querySelectorAll(".close");

//Recorrer el Array en vez de hacer un ciclo for

links.forEach(function(link){

  //Agregar un evento Click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content ");

    //Quitarle las clases de animacion qu eya tiene
    content.classList.remove("bounceInDown");
    content.classList.remove("animated");

    //Agregar las clases de animacion para su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");


     //setTimeout ejecuta instrucciones despues de cierto tiempo despues, UNA SOLA VEZ
     //setInterval ejecuta instrucciones despues de cierto tiempo despues, CICLICO

     setTimeout(function(){
       //Nos redirecciona a la pagina anterior
       location.href = "/Museos"
     },600 );

    return false;

  });
});
