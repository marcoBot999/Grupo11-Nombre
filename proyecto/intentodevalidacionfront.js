window.addEventListener("load", function(){
    let formulario = document.querySelector('form.reservation')

formulario.addEventListener("submit",function(e){

    let errors = []


    let firstName=document.querySelector("firstname")
    let lastName=document.querySelector("lastname")

    if (firstName.value == "" && firstName.value.length < 2 ){
        errors.push("el campo de nombre tiene que estar completo y tener mas de 2 caracteres")
    }

    if (lastName.value == "" &&  lastName.value.length < 2 ){
        errors.push("el campo de apellido tiene que estar completo y tener mas de 2 caracteres")
    }

    if (errors.length > 0) {
        e.preventDefault()}
        else{
            alert('La validación fué exitosa')
            form.submit();
        }
})}) 
    
