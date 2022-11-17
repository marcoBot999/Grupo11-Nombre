window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formRegistro");

    formulario.addEventListener("submit", function (e) {

        let campoNombre = document.querySelector('#firstname');

        if (campoNombre.value == "") {
            alert("Debes agregar un nombre");
        } else if (campoNombre.value.length < 2) {
            alert(" El nombre debe tener al menos 2 caracteres");
        };

        let campoApellido = document.querySelector('#lastname');

        if (campoApellido.value == "") {
            alert(" Debes agregar un apellido");
        } else if (campoApellido.value.length < 2) {
            alert(" El apellido debe tener al menos 2 caracteres");
        };

        let campoEmail = document.querySelector('#email');
        const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (campoEmail.value == "") {
            alert(" Debes ingresar un email");
        } else if (!correo.test(campoEmail.value)) {
            alert(" Debes ingresar un email válido");
        };

        let campoContrasenia = document.querySelector('#password');

        if (campoContrasenia.value == "") {
            alert(" Debes agregar una contraseña");
        } else if (campoContrasenia.value.length < 8) {
            alert(" La contraseña debe tener mínimo 8 caracteres");
        };

        let campoImagen = document.querySelector('#img');
        const imagen = /(.jpg|.jpeg|.png|.gif)$/i;

        if (!imagen.exec(campoImagen.value)) {
            alert(" La imagen debe ser un archivo válido (JPG, JPEG, PNG, GIF)");
        };

    });
})