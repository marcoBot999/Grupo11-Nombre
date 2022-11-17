window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formProductos");

    formulario.addEventListener("submit", function (e) {

        let campoNombreProd = document.querySelector('#name');

        if (campoNombreProd.value == "") {
            alert("Debes agregar un nombre para el producto");
        } else if (campoNombreProd.value.length < 5) {
            alert(" El nombre debe tener al menos 5 caracteres");
        };

        let campoDescripcion = document.querySelector('#description');

        if (campoDescripcion.value == "") {
            alert(" Debes agregar una descripción");
        } else if (campoDescripcion.value.length < 20) {
            alert(" La descripción debe tener al menos 20 caracteres");
        };

        let campoImagen = document.querySelector('#img');
        const imagen = /(.jpg|.jpeg|.png|.gif)$/i;

        if (!imagen.exec(campoImagen.value)) {
            alert(" La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF)");
        };

    });
})