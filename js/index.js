const modoNoche = document.querySelector("#oscuro-claro")
const body = document.querySelector(".modo-claro")

modoNoche.onclick = () => {
    body.classList.toggle("modo-oscuro")
    
    if(body.className === "modo-claro modo-oscuro"){
        modoNoche.textContent = "Dia"
        localStorage.setItem("modo-oscuro", "true")
        
    }
    else{
        modoNoche.textContent ="Noche"
        localStorage.setItem("modo-oscuro", "false")
    }
}
if(localStorage.getItem("modo-oscuro") === "true"){
    body.classList.add("modo-oscuro")
}
else{
    body.classList.remove("modo-oscuro")
}



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


