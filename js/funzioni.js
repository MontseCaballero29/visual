function mostrarToast(mensaje, tipo = "informacion", duracion = 3000) {
    //JS maneja milisegundos
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(tipo);
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.classList.add("mostrar");
    }, 100);
    setTimeout(function () {
        toast.classList.remove("mostrar");
        setTimeout(function () {
            toast.remove();
        }, 500);
    }, duracion);
}
