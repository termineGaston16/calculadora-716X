/* LOGICA DE CALCULADORA */

/* barra de numeros */
let barraDeNumeros = "";
let logicaDeCuenta = "";

function actualizarBarraDeNumeros() {
    if (barraDeNumeros == "") {
        document.querySelector("#barraDeNumeros").innerHTML = "0"
    } else {
        if (barraDeNumeros.length <= 15) {
            console.log(barraDeNumeros);
            console.log(logicaDeCuenta);

            document.querySelector("#barraDeNumeros").innerHTML = `${barraDeNumeros}`
        } else {
            alert("No es posible añadir más de 15 digitos")
        }
    }

}
actualizarBarraDeNumeros()

/* ---- */
/* teclado numeral */

document.querySelector("#btn0").addEventListener("click", () => {
    barraDeNumeros += "0"
    logicaDeCuenta += "0"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn1").addEventListener("click", () => {
    barraDeNumeros += "1"
    logicaDeCuenta += "1"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn2").addEventListener("click", () => {
    barraDeNumeros += "2"
    logicaDeCuenta += "2"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn3").addEventListener("click", () => {
    barraDeNumeros += "3"
    logicaDeCuenta += "3"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn4").addEventListener("click", () => {
    barraDeNumeros += "4"
    logicaDeCuenta += "4"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn5").addEventListener("click", () => {
    barraDeNumeros += "5"
    logicaDeCuenta += "5"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn6").addEventListener("click", () => {
    barraDeNumeros += "6"
    logicaDeCuenta += "6"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn7").addEventListener("click", () => {
    barraDeNumeros += "7"
    logicaDeCuenta += "7"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn8").addEventListener("click", () => {
    barraDeNumeros += "8"
    logicaDeCuenta += "8"
    actualizarBarraDeNumeros()
})
document.querySelector("#btn9").addEventListener("click", () => {
    barraDeNumeros += "9"
    logicaDeCuenta += "9"
    actualizarBarraDeNumeros()
})
document.querySelector("#btnPunto").addEventListener("click", () => {
    let agregarPunto = true;

    barraDeNumeros.split('').forEach(letra => {
        if (letra == ".") {
            agregarPunto = false;
        }
    });

    if (agregarPunto) {
        if (barraDeNumeros == "" && logicaDeCuenta == "") {
            barraDeNumeros += "0.";
            logicaDeCuenta += "0."
        } else {
            barraDeNumeros += ".";
            logicaDeCuenta += "."
        }
        actualizarBarraDeNumeros()
    }



})
document.querySelector("#btnClear").addEventListener("click", () => {
    barraDeNumeros = "";
    logicaDeCuenta = "";
    actualizarBarraDeNumeros()
})

/* ---- */
/* Suma */
document.querySelector("#btnSuma").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        alert("Introduce algun numero")
    } else {
        logicaDeCuenta += "+";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

/* Igual */
document.querySelector("#btnIgual").addEventListener("click", () => {

    if (logicaDeCuenta != "") {
        document.querySelector("#barraDeNumeros").innerHTML = `${eval(logicaDeCuenta)}`

        barraDeNumeros = "";
        logicaDeCuenta = "";
    } else {
        alert("agrega algun numero")
    }

})

/* Resta */
document.querySelector("#btnResta").addEventListener("click", () => {

    logicaDeCuenta += "-";
    barraDeNumeros = "";
    actualizarBarraDeNumeros()
})

/* Multiplicacion */
document.querySelector("#btnMultiplicacion").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        alert("Introduce algun numero")
    } else {
        logicaDeCuenta += "*";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

/* División */
document.querySelector("#btnDivision").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        alert("Introduce algun numero")
    } else {
        logicaDeCuenta += "/";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

