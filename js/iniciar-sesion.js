let botonEnviarInicio = document.getElementById("botonEnviarInicio");
botonEnviarInicio.addEventListener("click", iniciarSesion);

//Funcion de inicio de sesion
function iniciarSesion(e){
    e.preventDefault();
   
    const formularioInicio = document.getElementById("formularioInicio");

    const datosInicio = {
        email: formularioInicio.emailInicio.value.toUpperCase(),
        password: formularioInicio.passwordInicio.value.toUpperCase()
    }

    const datosJson = localStorage.getItem("datosUsuario");
    const datosDelUsuario = JSON.parse(datosJson);
    
       if (datosDelUsuario.email === datosInicio.email && datosDelUsuario.password === datosInicio.password){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Ingresaste correctamente ${datosDelUsuario.nombre}`,
            showConfirmButton: false,
            timer: 2000
          }).then((result) =>{
            window.location.href = '../pages/carrito.html';
          });
        
    } else {

                Swal.fire({
                icon: "error",
                title: "Error",
                text: "Email o contraseña incorrectas",
                footer: 'Porbar de nuevo <a href="../pages/iniciar-sesion.html">acá</a>'
              });

            }
        }

