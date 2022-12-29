const formulario = document.getElementById("form")

const form = document.querySelector("#form")

const nombreForm = document.querySelector("#nombre")
const apellidoForm = document.querySelector("#apellido")
const correoForm = document.querySelector("#correo")
const passForm = document.querySelector("#pass")
const dniForm = document.querySelector("#documento")

const respuestaNombre = document.querySelector("#nombre-respuesta")
const respuestaApellido = document.querySelector("#respuesta-apellido")
const respuestaCorreo = document.querySelector("#respuesta-correo")
const respuestaDni = document.querySelector("#respuesta-dni")

nombreForm.oninput = () => {
    if(nombreForm.value === ""){
        respuestaNombre.textContent = "Nombre"
        nombreForm.style.border = "2px solid red"
    }
    else{
        respuestaNombre.textContent = nombreForm.value
        nombreForm.style.border = "2px solid green"
    }
}
apellidoForm.oninput = () => {
    if(apellidoForm.value === ""){
        respuestaApellido.textContent = "Apellido"
        apellidoForm.style.border = "2px red solid"
    }
    else{
        respuestaApellido.textContent = apellidoForm.value
        apellidoForm.style.border = "2px solid green"
    }   
}
correoForm.oninput = () => {
    if(correoForm.value === ""){
        respuestaCorreo.textContent = "Correo Electronico"
    }
    else{
        respuestaCorreo.textContent = correoForm.value
    }
}
dniForm.oninput = () => {
    if(dniForm.value === ""){
        respuestaDni.textContent = "Documento"
        respuestaDni.style.border = "3 px solid red"
    }
    else{
        respuestaDni.textContent = dniForm.value
    }
}

const alanDatos = {
    nombre: "Alan",
    apellido: "Fernandez",
    correo: "alan123@gmail.com",
    dni: "20998877"
}

form.onsubmit = (e) => {
    e.preventDefault()
}

if(alanDatos.nombre === nombreForm.value && alanDatos.apellido === apellidoForm.value && alanDatos.correo === correoForm && alanDatos.dni ===dniForm){
    alert("Gracias por unirse")
}
else{
    alert("Error en los datos")
}


