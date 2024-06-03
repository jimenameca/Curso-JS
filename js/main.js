const producto1 = {
    codigo: 1,
    nombre: "Buzo tarantino",
    precio: 15000,
    Promocion: "no",
    tela: "Algodon"
}

const producto2 = {
    codigo: 2,
    nombre: "Gorro Marvel",
    precio: 5000,
    Promocion: "si",
    tela: "lana"
}

const producto3 = {
    codigo: 3,
    nombre: "short pulp fiction",
    precio: 7500,
    Promocion: "no",
    tela: "poliester"
}

const producto4 = {
    codigo: 4,
    nombre: "Remera Bowie",
    precio: 10000,
    Promocion: "si",
    tela: "Algodon"
}

const productos = [producto1, producto2, producto3, producto4]

console.log(productos)

const addProducto = () => {

    alert("¡Bienvenido/a! Vamos a agregar un nuevo producto.");

    let codigo = prompt("Elige un codigo")
    let nombre = prompt("Elige el tipo de prenda")
    let precio = prompt("Elige un precio")
    let promocion = prompt("Promo si/no")
    let tela = prompt("Elige el tipo de tela")

    const producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        promocion: promocion,
        tela: tela
    }

    productos.push(producto)
}

function precioConIva() {
    alert("Voy ayudarte a calcular el precio mas IVA de tu producto")
    let precio2 = parseInt(prompt("Ingrese el precio que desea calcular IVA"))
    let resultado = precio2 * 1.21
    alert("el precio mas IVA es: " + resultado)
}

function mostrarProductos() {
    let continuar = true
    while (continuar) {
        let precio2 = parseInt(prompt("Cual es el precio que desea calcular por unidad?"))
        for (let i = 2; i <= 5; i++) {
            let resultado = i * precio2
            let resultadoConDescuento = resultado * 0.9;
            alert("el precio de los productos de acuerdo a las unidades adquiridas restando el 10 % por promocion es: " + resultadoConDescuento)
        }
        let confirmar = prompt("queres volver a calcular otro precio? (si/no)")
        if (confirmar== "no") {
            continuar = false
            alert("volves al menu")
        }
    }
}

    function encuestaSatisfaccion() {
        const valoracion = parseInt(prompt("Del 1 al 10, ¿qué tan satisfecho estás con el proceso de compra?"))
        if (valoracion >= 1 && valoracion <= 4) {
            alert("Lamentamos que tu experiencia no haya sido tan satisfactoria. Un operador se comunicará contigo para que nos cuentes qué sucedió.");
        } else if (valoracion >= 5 && valoracion <= 6) {
            alert("Prometemos mejorar para que puedas elegirnos nuevamente. ¡Gracias por tu feedback!");
        } else if (valoracion >= 7 && valoracion <= 10) {
            alert("¡Nos alegra mucho! Te esperamos pronto de vuelta.");
        } else {
            alert("Valoración inválida. Por favor, ingrese un número del 1 al 10.");
        }
    }

    let opcion = parseInt(prompt("Bienvenido al simulador de Stock \n Elija una opcion: \n 1- Sumar un producto al stok \n 2- Calcular el IVA de un precio \n 3- Mostrar precio por compra mayorista hasta 5 unidades con 10 % \n 4- Encuesta de Satisfaccion \n 5- Salir"))
    while (opcion !== 5) {
        switch (opcion) {
            case 1:
                addProducto()
                break
            case 2:
                precioConIva()
                break
            case 3:
                mostrarProductos()
                break
            case 4:
                encuestaSatisfaccion()
                break
            default:
                alert("no existe")
                break
        }
        opcion = parseInt(prompt("Elija una opción: \n 1- Sumar un producto al Stock \n 2- Calcular el IVA de un precio \n 3- Mostrar precio por compra mayorista hasta 5 unidades con 10 % \n 4- Encuesta de Satisfaccion \n 5- Salir"))
    }
    alert("gracias por utilizar el sistema de stock")
    console.log(productos)