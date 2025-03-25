//Matriz Multidimencional

console.log("Ingrese sus siguientes datos")
let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let dni = prompt("Ingrese su dni:")

//Numero telefonico 
let numero = []
while(true){
    console.log("Para salir ingrese: Terminado")
    let numeroTelefonico = prompt("Ingrese su numero telefonico")
    if(numeroTelefonico == "Terminado"){break}
    numero.push(numeroTelefonico)
}
let matriz = [nombre, apellido, dni, numero]
//Datos en consola
console.log(matriz)