//Eventos

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", registrarUsuario);

//Funcion de registro de usuario
function registrarUsuario(e){
    e.preventDefault();
    const formulario = document.getElementById("formularioRegistro")

    const datosDelUsuario = {
        nombre: formulario.nombre.value.toUpperCase(),
        apellido: formulario.apellido.value.toUpperCase(),
        email: formulario.email.value.toUpperCase(),
        password: formulario.password.value.toUpperCase()
    }
    Swal.fire({
        position: "center",
        icon: "success",
        title: `¡Felicitciones ${datosDelUsuario.nombre}, te registraste con éxito!`,
        showConfirmButton: false,
        timer: 3000
      }).then((result) =>{
        window.location.href = './pages/iniciar-sesion.html';
      })
    

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

