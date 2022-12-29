const modoNoche = document.querySelector("#oscuro-claro")
const body = document.querySelector(".modo-claro")

modoNoche.onclick = () => {
    body.classList.toggle("modo-oscuro")
    
    if(body.className === "modo-claro modo-oscuro"){
        modoNoche.textContent = "Dia"
    }
    else{
        modoNoche.textContent ="Noche"
    }
}
