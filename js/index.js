/* LOGICA DE CALCULADORA */

/* barra de numeros */
let barraDeNumeros = "";
let logicaDeCuenta = "";
let porcentajeOn = false;

function actualizarBarraDeNumeros() {
    if (barraDeNumeros == "") {
        document.querySelector("#barraDeNumeros").innerHTML = "0"
    } else {
        if (barraDeNumeros.length <= 15) {
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
    porcentajeOn = false;
    raizOn = false;
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
        let resultado = 0

        if (porcentajeOn) {
            logicaDeCuenta += "/100"
            resultado = eval(logicaDeCuenta)
            porcentajeOn = false;

        } else {
            resultado = eval(logicaDeCuenta)
        }


        document.querySelector("#barraDeNumeros").innerHTML = `${resultado}`

        if (resultado == 0) {
            barraDeNumeros = "";
            logicaDeCuenta = "";
            actualizarBarraDeNumeros()
        } else {
            barraDeNumeros = resultado;
            logicaDeCuenta = resultado.toString()
        }


    } else {
        alert("agrega algun numero")
    }

})

/* Resta */
document.querySelector("#btnResta").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        alert("Introduce algun numero")
    } else {
        logicaDeCuenta += "-";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
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
btnPorcentaje

/* Porcentaje */
document.querySelector("#btnPorcentaje").addEventListener("click", () => {

    if (porcentajeOn) {
        alert("El porcentaje ya está seleccionado")
    } else {

        if (barraDeNumeros == "") {
            alert("Introduce algun numero")
        } else {

            porcentajeOn = true
            logicaDeCuenta += "*";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }

})

/* Raiz */
document.querySelector("#btnRaiz").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        alert("Introduce algun numero")
    } else {
        let numeroTotal = 0;
        numeroTotal = eval(logicaDeCuenta);
        logicaDeCuenta = (Math.sqrt(numeroTotal)).toString()

        barraDeNumeros = logicaDeCuenta;
        document.querySelector("#barraDeNumeros").innerHTML = `${eval(logicaDeCuenta)}`

    }
})


/* ------------------------------------ */
/* teclado numeral con las tlecas */

document.addEventListener("keydown", function (event) {

    if (event.key === "0") {
        barraDeNumeros += "0"
        logicaDeCuenta += "0"
        actualizarBarraDeNumeros()
    }
    if (event.key === "1") {
        barraDeNumeros += "1"
        logicaDeCuenta += "1"
        actualizarBarraDeNumeros()
    }
    if (event.key === "2") {
        barraDeNumeros += "2"
        logicaDeCuenta += "2"
        actualizarBarraDeNumeros()
    }
    if (event.key === "3") {
        barraDeNumeros += "3"
        logicaDeCuenta += "3"
        actualizarBarraDeNumeros()
    }
    if (event.key === "4") {
        barraDeNumeros += "4"
        logicaDeCuenta += "4"
        actualizarBarraDeNumeros()
    }
    if (event.key === "5") {
        barraDeNumeros += "5"
        logicaDeCuenta += "5"
        actualizarBarraDeNumeros()
    }
    if (event.key === "6") {
        barraDeNumeros += "6"
        logicaDeCuenta += "6"
        actualizarBarraDeNumeros()
    }
    if (event.key === "7") {
        barraDeNumeros += "7"
        logicaDeCuenta += "7"
        actualizarBarraDeNumeros()
    }
    if (event.key === "8") {
        barraDeNumeros += "8"
        logicaDeCuenta += "8"
        actualizarBarraDeNumeros()
    }
    if (event.key === "9") {
        barraDeNumeros += "9"
        logicaDeCuenta += "9"
        actualizarBarraDeNumeros()
    }
    if (event.key === ".") {
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
    }
    if (event.key === "Backspace") {
        barraDeNumeros = "";
        logicaDeCuenta = "";
        porcentajeOn = false;
        raizOn = false;
        actualizarBarraDeNumeros()
    }
    if (event.key === "+") {
        if (barraDeNumeros == "") {
            alert("Introduce algun numero")
        } else {
            logicaDeCuenta += "+";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "Enter") {
        if (logicaDeCuenta != "") {
            let resultado = 0

            if (porcentajeOn) {
                logicaDeCuenta += "/100"
                resultado = eval(logicaDeCuenta)
                porcentajeOn = false;

            } else {
                resultado = eval(logicaDeCuenta)
            }


            document.querySelector("#barraDeNumeros").innerHTML = `${resultado}`

            if (resultado == 0) {
                barraDeNumeros = "";
                logicaDeCuenta = "";
                actualizarBarraDeNumeros()
            } else {
                barraDeNumeros = resultado;
                logicaDeCuenta = resultado.toString()
            }


        } else {
            alert("agrega algun numero")
        }
    }
    if (event.key === "-") {
        if (barraDeNumeros == "") {
            alert("Introduce algun numero")
        } else {
            logicaDeCuenta += "-";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "*") {
        if (barraDeNumeros == "") {
            alert("Introduce algun numero")
        } else {
            logicaDeCuenta += "*";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "/") {

        if (barraDeNumeros == "") {
            alert("Introduce algun numero")
        } else {
            logicaDeCuenta += "/";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "%") {

        if (porcentajeOn) {
            alert("El porcentaje ya está seleccionado")
        } else {

            if (barraDeNumeros == "") {
                alert("Introduce algun numero")
            } else {

                porcentajeOn = true
                logicaDeCuenta += "*";
                barraDeNumeros = "";
                actualizarBarraDeNumeros()

            }
        }

    }
});


/* ------------------------------------ */
/* Hora y Fecha */

function actualizarHoraYFecha() {
    let ahora = new Date();
    let horaDeHoy = ahora.getHours();
    let minutosDeHoy = ahora.getMinutes().toString().padStart(2, '0');
    let segundosDeHoy = ahora.getSeconds().toString().padStart(2, '0');
    let diaDeHoy = ahora.getDate();
    let mesDeHoy = ahora.getMonth() + 1; // Los meses van de 0 a 11, sumamos 1 para obtener el valor correcto
    let añoDeHoy = ahora.getFullYear();

    let horaYFechaFormateada = `${horaDeHoy}:${minutosDeHoy}:${segundosDeHoy} <br> ${diaDeHoy}/${mesDeHoy}/${añoDeHoy}`;

    document.querySelector("#idCalcuHoraYFecha").innerHTML = `
        <p class="calcuHoraYFechaContent">${horaYFechaFormateada}</p>
    `;
}

setInterval(actualizarHoraYFecha, 1000);


