const carroMain = document.getElementById("carrito-container")
const iconCarrito = document.getElementById("iconCarrito")
const modalContainer = document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = []

casacas.forEach((product)=> {
    let data = document.createElement("div")
    data.className = "productCard"
    data.innerHTML = `
    <img class = "img-product" src="${product.img}">
    <h3 class ="titulo-producto"> ${product.productos} </h3>
    <p class ="precio"> ${product.precio} $</p>
    `;

    carroMain.append(data)

    let addbutton = document.createElement("button")
    addbutton.innerText = "Sumar al Carrito" 
    addbutton.className = "addbtn"

    data.append(addbutton)

    addbutton.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id) 

    if(repeat) {
        carrito.map((prod) => {
            if (prod.id === product.id) {
                prod.cantidad++;
            }
        })
    } else {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.productos,
            precio : product.precio,
            cantidad : product.cantidad
        })
    }
        console.log(carrito)
        contadorCarrito ()
    }) 
});


