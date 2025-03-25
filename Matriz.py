#Matriz multidimencional

nombre = input("Ingrese su nombre:")
apellido = input("Ingrese su apellido:")
dni = input("Ingrese su dni:")

#Cargas de numero telefonico

numero = []
while True:
    print("Para salir escriba:'Terminado'")
    numero_telefono = input("Ingrese su numeor de telefono:")
    if numero_telefono == "Terminado":
        print("A salido")
        break
    numero.append(numero_telefono)
matriz = [nombre , apellido , dni , numero]
print(matriz)