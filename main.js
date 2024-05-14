//Eventos

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", registrarUsuario);

//Funcion de registro de usuario
function registrarUsuario(){
    const formulario = document.getElementById("formularioRegistro")

    const datosDelUsuario = {
        nombre: formulario.nombre.value.toUpperCase(),
        apellido: formulario.apellido.value.toUpperCase(),
        email: formulario.email.value.toUpperCase(),
        password: formulario.password.value.toUpperCase()
    }
        console.log(`Te registraste con éxito. ¡Te damos la bienvenida ${datosDelUsuario.nombre}!`);

const datosJson = JSON.stringify(datosDelUsuario);

localStorage.setItem("datosUsuario", datosJson);

}
//Cargar datos del localstorage
function cargarFormulario (){
    const formulario = document.getElementById("formularioRegistro");
    const datosJson = localStorage.getItem("datosUsuario");
    if (datosJson){
const datosDelUsuario = JSON.parse(datosJson)
    formulario.nombre.value = datosDelUsuario.nombre
    formulario.apellido.value = datosDelUsuario.apellido
    formulario.email.value = datosDelUsuario.email
    formulario.password.value = datosDelUsuario.password

    }
}

let botonEnviarInicio = document.getElementById("botonEnviarInicio");
botonEnviarInicio.addEventListener("click", iniciarSesion);

//Funcion de inicio de sesion
function iniciarSesion(){
    const formularioInicio = document.getElementById("formularioInicio");

    const datosInicio = {
        nombre: formularioInicio.nombreInicio.value.toUpperCase(),
        apellido: formularioInicio.apellidoInicio.value.toUpperCase(),
        email: formularioInicio.emailInicio.value.toUpperCase(),
        password: formularioInicio.passwordInicio.value.toUpperCase()
    }

    const datosJson = localStorage.getItem("datosUsuario");
    const datosDelUsuario = JSON.parse(datosJson);
    
    let intentos = 0
    while(intentos <=3){
       if (datosDelUsuario.email === datosInicio.email && datosDelUsuario.password === datosInicio.password){
        console.log(`Iniciaste sesión ${datosInicio.nombre}`);
        break;
    }
        else{
            intentos++
            console.log("Error en mail o contraseña. Tenés " + (3 - intentos) + " oportunidades más ");

            if (intentos === 3){
                console.log(`${datosDelUsuario.nombre} ${datosDelUsuario.apellido} bloqueaste tu cuenta. Intentá nuevamente en 3 días.`);
                break;
            }
            }
        }
    }     
    

   