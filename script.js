//Declaro funciones
function MuestroMensajeFuncion(valor1, valor2)
{
    return valor1 + " " + valor2
}


//variable que guardara la opcion escogida
let opcion
let opcionvalida = "si"

opcion = prompt("Escoja Bucle For(F), While(W) o Do While (D)")

while (opcionvalida == "si") {


    switch (opcion) {
        case "F":
            //utilizo estructura for
            //uso funcion flecha
            let mensajefor="Se escogió Uso de ciclo For - Funcion Flecha, Opcion: "
            const mensaje=(mensajefor,opcionescogida)=> mensajefor + opcion

            console.log(mensaje(mensajefor,opcion))
            //inicializo variable contador
            let i = 0

            for (i = 0; i < 6; i++) {
                //uso de función
                console.log(MuestroMensajeFuncion("For iteración - Uso Funcion:",i))
            }
            console.log("Fin de ciclo for:")
            opcionvalida="no"
            break
        case "W":
            //utilizo estructura while
            console.log("Se escogió Uso de ciclo While - NO uso función: Opción " + opcion)
            let j = 0
            while (j < 4) {
                console.log("While iteración - No uso función: " + j)
                j++
            }
            console.log("Fin de ciclo While:")
            opcionvalida="no"
            break
        case "D":
            //utilizo estructura do while
            //uso funcion MuestroMensajeFuncion
            console.log(MuestroMensajeFuncion("Se escogió Uso de ciclo Do While - Uso Funcion:",opcion))
            let k = 0
            do {
                console.log("Do While iteración - No uso función: " + k)
                k += 1
                if (k == 4) {
                    console.log("Se llegó a la última iteración Do While:")
                }

            } while (k < 4)
            //fin estructura do while
            opcionvalida="no"
            break

        default:
            console.log("Opción No Válida. Debe escoger: F/W/D")
            opcion = prompt("Escoja Bucle For(F), While(W) o Do While (D)")
            break
    }

}

console.log ("Autor: Percy Guerra")
console.log("Fin de Desafio 2:")




