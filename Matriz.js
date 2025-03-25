//Matriz Multidimencional

console.log("Ingrese sus siguientes datos")
let matriz = []

//Numero telefonico 

while(true){
    console.log("Para salir ingrese: Terminado")
    let nombre = prompt("Ingrese su nombre:")
    if(nombre == "Terminado") {break};
    let apellido = prompt("Ingrese su apellido:")
    let dni = prompt("Ingrese su dni:")
    //Lista de numero telefonico
    let numero = []
    while(true){
      let numeroTelefonico = prompt("Ingrese su numero telefonico")
      if(numeroTelefonico == "Terminado"){break}
    numero.push(numeroTelefonico)}
    matriz.push([nombre, apellido, dni, numero])
}

console.log(matriz)