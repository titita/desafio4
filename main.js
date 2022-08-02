var total = 0;
var precio = 0;
var cantidad = 0;

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad del producto seleccionado"));
}
function precioOrden(a){
    cantidad = seleccionarCantidad();
    return total += (a*cantidad);
}

do{
    let producto = parseInt(prompt("Digite que producto desea agregar al carrito \n1-Yerba\n 2-Azucar \n 3-Te"));
    switch(producto){
        case 1:
            precioOrden(100);
            break;
        case 2:
            precioOrden(50);
            break;
        case 3:
            precioOrden(30);
            break;
        default:
            alert("Opcion no valida")
    }

    otroProducto = confirm("¿Queres agregar otro producto?")
} while(otroProducto);

alert("Debe abonar " + total)