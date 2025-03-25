#Matriz multidimencional


matriz = []

while True:
   print("Ingrese sus datos(Para salir escriba: 'Terminado'")
   nombre = input("Ingrese su nombre:")
   if nombre == "Terminado":
      print("A salido")
      break
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
     #Se agrega numero de telefono a la lista numero
     numero.append(numero_telefono)
   matriz.append([nombre, apellido, dni, numero])
print("\nMatriz final:")
for persona in matriz:
    print(persona)