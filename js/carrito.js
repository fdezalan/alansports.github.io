const pintarCarro = () => {
    
        modalContainer.innerHTML = ""
        modalContainer.style.display = "flex"
        const modalHeader = document.createElement("div")
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
        <h1 class ="modal-header-title" > Carrito </h1>
        `
        modalContainer.append(modalHeader);
    
        const escapeButton = document.createElement("h2")
        escapeButton.className = "escape-button";
        escapeButton.innerText = "X";
    
        escapeButton.addEventListener("click", () => {
            modalContainer.style.display = "none" 
        });
    
        modalHeader.append(escapeButton);
    
        carrito.forEach((product)  => {
            let contenidoCarrito = document.createElement("div")
            contenidoCarrito.className = "contenido-carro"
            contenidoCarrito.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p> ${product.precio} </p>
            <p>Cantidad: ${product.cantidad} </p>
            <p> Total: ${product.cantidad * product.precio} </p>
            `;
            modalContainer.append(contenidoCarrito)  

            let eliminar = document.createElement ("span")

            eliminar.innerText = "x"
            eliminar.className = "quitarProducto"
            contenidoCarrito.append(eliminar)

            eliminar.addEventListener("click", eliminarProducto)
        });

        const totalcarro = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    
        const totalcompra = document.createElement("div");
        totalcompra.className = "total-content"
        totalcompra.innerHTML = `
            total a pagar: ${totalcarro} $
        `;
        modalContainer.append(totalcompra)
    }    


iconCarrito.addEventListener("click", pintarCarro )

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id)

    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundId;
    })
    contadorCarrito ()
    pintarCarro()
}

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerHTML = carrito.length
}


