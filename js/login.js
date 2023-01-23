function login() {
    
    const user = document.querySelector("#usuario").value;
    const password = document.querySelector("#contrasena").value

    if(user === "Alan" && password === "Robertson123"){
        window.location = "../index2.html"
        localStorage.usuario = user
    }
    else{
        alert("ingrese bien sus datos")
    }
}
