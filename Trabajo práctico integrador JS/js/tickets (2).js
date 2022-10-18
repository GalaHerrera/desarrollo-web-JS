//alert("Hola!");
function enviar() {
    event.preventDefault();

    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let cartel = document.getElementById("cartel");

    let descuento;

    if (categoria == "estudiante") {
        descuento = 80;
    } else if (categoria == "trainee") {
        descuento = 50;
    } else if (categoria == "junior") {
        descuento = 15;
    }

    let precioFinal = 200 * cantidad - ((200 * 0, descuento) * cantidad);
    cartel.innerText = "Total a Pagar: $" + precioFinal;
}

/*
(200 - (200* 0,categoria )) x cantidad

200 x cantidad - (200*0,descuento)

*/