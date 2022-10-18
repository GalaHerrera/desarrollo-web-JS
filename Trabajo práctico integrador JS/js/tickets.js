function enviar() {
    event.preventDefault();
    

    const precioOriginal = 200;
    let precioFinal;
    let descuento;

    let cantidadObtenida = document.getElementById("cantidad").value;
    let categoriaObtenida = document.getElementById("categoria").value;

    if (cantidadObtenida > 0) {

        if (categoriaObtenida == "estudiante") {
            descuento = 80;
        } else if (categoriaObtenida == "trainee") {
            descuento = 50;
        } else if (categoriaObtenida == "junior") {
            descuento = 15;
        }

        precioFinal = (cantidadObtenida * precioOriginal) -
            ((cantidadObtenida * precioOriginal) * 0, descuento);

        let totalAPagar = document.getElementById("totalAPagar");
        totalAPagar.innerText = "Total a pagar: $" + precioFinal;


    } else {
        alert("Debe ingresar la cantidad de tickets");
    }

}

function resetear() {

    let totalAPagar = document.getElementById("totalAPagar")
    totalAPagar.innerText = "Total a pagar: $";
}