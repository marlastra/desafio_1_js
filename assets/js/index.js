const precioBase = 400000;
let cantidad = 0;
let totalPagar = 0;

document.querySelector("#precio").innerHTML = precioBase;
document.querySelector("#cantidad").innerHTML = cantidad;
document.querySelector("#totalPagar").innerHTML = totalPagar;

document.querySelector("#btnIncrementar").onclick = () => {
    cantidad += 1;
    totalPagar = cantidad * precioBase;
    document.querySelector("#cantidad").innerHTML = cantidad;
    document.querySelector("#totalPagar").innerHTML = totalPagar;
};

document.querySelector("#btnDecrementar").onclick = () => {
    cantidad -= 1;
    totalPagar = cantidad * precioBase;
    document.querySelector("#cantidad").innerHTML = cantidad;
    document.querySelector("#totalPagar").innerHTML = totalPagar;
};
