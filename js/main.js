document.addEventListener("DOMContentLoaded", function() {


    let usuarios = [];


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
//clicks
    botonMostrarCrear.addEventListener("click", function() {
        // Mostrar el contenedor de entrada
        contenedorInputCrear.style.display = "block";
    });
    botonMostrarIngresar.addEventListener("click", function() {
        // Mostrar el contenedor de entrada
        contenedorInputIngresar.style.display = "block";
    });
//crear
    botonConfirmarEntradaCrear.addEventListener("click", function() {
        // Obtener la información del usuario del input
        let informacionUsuarioCreado = inputCrearUsuario.value;
        let informacionContraseñaCreada = inputCrearContraseña.value;

        // Hacer algo con la información obtenida (en este caso, simplemente mostrarla en la consola)
        console.log("Nombre del Usuario Nuevo:", informacionUsuarioCreado);
        console.log("Contraseña del Usuario Nuevo:", informacionContraseñaCreada);

        // Ocultar el contenedor de entrada después de obtener la información
        contenedorInputCrear.style.display = "none";
    });
//ingresar
    botonConfirmarEntradaIngresar.addEventListener("click", function() {
        // Obtener la información del usuario del input
        let informacionUsuarioIngresado = inputIngresarUsuario.value;
        let informacionContraseñaIngresada = inputIngresarContraseña.value;
        // Hacer algo con la información obtenida (en este caso, simplemente mostrarla en la consola)
        console.log("Nombre de Usuario:", informacionUsuarioIngresado);
        console.log("Contraseña de Usuario:", informacionContraseñaIngresada);

        // Ocultar el contenedor de entrada después de obtener la información
        contenedorInputIngresar.style.display = "none";
    }); 
}); 
