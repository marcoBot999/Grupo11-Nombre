window.addEventListener("load", function () {
    const formulario = document.querySelector("form.formLogin")
    const campoEmail = document.querySelector('#email')
    const campoContrasenia = document.querySelector('#password')

    const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    formulario.addEventListener("submit", function (e) {
        //e.preventDefault();
        validaCampos();
    })

    const validaCampos = function () {
        if (campoEmail.value === "") {
            validacionFalla(campoEmail, "Debes ingresar un email");
        } else if (!correo.test(campoEmail.value)) {
            validacionFalla(campoEmail, "Debes ingresar un email válido");
        } else {
            validacionOk
        };

        if (campoContrasenia.value == "") {
            validacionFalla(campoContrasenia, "Debes agregar una contraseña");
        } else if (campoContrasenia.value.length < 8) {
            validacionFalla(campoContrasenia, "La contraseña debe tener mínimo 8 caracteres");
        } else {
            validacionOk
        };
    }

    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector('p');
        aviso.innerText = msje;

        formControl.className = 'form-control falla';
    }

    const validacionOk = (input, msje) => {
        const formControl = input.parentElement;

        formControl.className = 'form-control ok';
    }
})