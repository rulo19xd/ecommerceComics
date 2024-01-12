document.addEventListener("DOMContentLoaded", function() {
    
    class Cuentas {
        constructor(usuario, contraseña) {
                this.cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
        }
        agregarCuenta(usuario, contraseña) {
        const nuevaCuenta = {usuario, contraseña};
        this.cuentas.push(nuevaCuenta);
        alert(`Se ha creado una nueva cuenta para ${usuario}.`);
        this.actualizarLocalStorage();
        }

        verificarCredenciales(usuario, contraseña) {
            // Verificar si hay una cuenta con las credenciales proporcionadas
            const cuentaEncontrada = this.cuentas.find(cuenta => cuenta.usuario === usuario && cuenta.contraseña === contraseña);
            
            if (cuentaEncontrada) {
                alert(`Inicio de sesión exitoso para ${usuario}.`);
                window.location.href = "../index.html";
            } else {
                alert(`Credenciales incorrectas para ${usuario}.`);
            }
        }
        actualizarLocalStorage() {
            localStorage.setItem('cuentas', JSON.stringify(this.cuentas));
        }
    }

    
    
    
    
    let botonMostrarCrear = document.getElementById("crearCuenta");
    let botonMostrarIngresar = document.getElementById("ingresarCuenta");
    let contenedorInputCrear = document.getElementById("contenedorCrear");
    let contenedorInputIngresar = document.getElementById("contenedorIngresar");
    let inputCrearUsuario = document.getElementById("crearUsuario");
    let inputCrearContraseña = document.getElementById("crearContraseña");
    let inputIngresarUsuario = document.getElementById("entradaUsuario");
    let inputIngresarContraseña = document.getElementById("entradaContraseña");
    let botonConfirmarEntradaCrear = document.getElementById("confirmarEntradaCrear");
    let botonConfirmarEntradaIngresar = document.getElementById("confirmarEntradaIngresar");
    let viaje = false;

    const gestor = new Cuentas();
//clicks
    botonMostrarCrear.addEventListener("click", function() {
        contenedorInputCrear.style.display = "block";
        contenedorInputIngresar.style.display = "none";
    });

    botonMostrarIngresar.addEventListener("click", function() {
        contenedorInputIngresar.style.display = "block";
        contenedorInputCrear.style.display = "none";
    });

//crear
    botonConfirmarEntradaCrear.addEventListener("click", function() {
        // Obtener la información del usuario del input
        let informacionUsuarioCreado = inputCrearUsuario.value;
        let informacionContraseñaCreada = inputCrearContraseña.value;
        // Hacer algo con la información obtenida (en este caso, simplemente mostrarla en la consola)
        gestor.agregarCuenta(informacionUsuarioCreado, informacionContraseñaCreada);
        // Ocultar el contenedor de entrada después de obtener la información
        contenedorInputCrear.style.display = "none";
    });
//ingresar
    botonConfirmarEntradaIngresar.addEventListener("click", function() {
        // Obtener la información del usuario del input
        let informacionUsuarioIngresado = inputIngresarUsuario.value;
        let informacionContraseñaIngresada = inputIngresarContraseña.value;
        // Hacer algo con la información obtenida (en este caso, simplemente mostrarla en la consola)
        gestor.verificarCredenciales(informacionUsuarioIngresado, informacionContraseñaIngresada);
        // Ocultar el contenedor de entrada después de obtener la información
        contenedorInputIngresar.style.display = "none";
    }); 
}); 

