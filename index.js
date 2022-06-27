function calculadoraIntereses(){
    let Monto = prompt("Inserte monto a calcular");
    let Cuotas = prompt("Inserte numero de cuotas");
    let Interes = prompt("Inserte tasa de interes");
    const resultado = alert("El resultado es: " + Monto / Cuotas * Interes)
}

function greeting() {
    let intro = alert("Bienvenido al simulador de tarjetas de credito.") 
    return calculadoraIntereses()
}

function calculadora() {
    let init = greeting()
    while (init == greeting()){
        calculadoraIntereses()
    }
}

calculadora()