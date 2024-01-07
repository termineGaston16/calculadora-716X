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
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            No se pueden introducir más de 15 dígitos.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
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
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
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
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
    }

})

/* Resta */
document.querySelector("#btnResta").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
    } else {
        logicaDeCuenta += "-";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

/* Multiplicacion */
document.querySelector("#btnMultiplicacion").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
    } else {
        logicaDeCuenta += "*";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

/* División */
document.querySelector("#btnDivision").addEventListener("click", () => {

    if (barraDeNumeros == "") {
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
    } else {
        logicaDeCuenta += "/";
        barraDeNumeros = "";
        actualizarBarraDeNumeros()

    }
})

/* Porcentaje */
document.querySelector("#btnPorcentaje").addEventListener("click", () => {

    if (porcentajeOn) {
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        El porcentaje ya está seleccionado.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
    } else {

        if (barraDeNumeros == "") {
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
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
        Swal.fire({
            html:`
                    <div class="container-fluid swalAlert">
                    <p class="swalAlertText" id="exampleModalLabel">
                        Agrega un número.
                    </p>
                    </div>
            `,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: `rgba(12, 12, 12, 0)`
          });
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
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
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
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
        }
    }
    if (event.key === "-") {
        if (barraDeNumeros == "") {
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
        } else {
            logicaDeCuenta += "-";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "*") {
        if (barraDeNumeros == "") {
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
        } else {
            logicaDeCuenta += "*";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "/") {

        if (barraDeNumeros == "") {
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            Agrega un número.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
        } else {
            logicaDeCuenta += "/";
            barraDeNumeros = "";
            actualizarBarraDeNumeros()

        }
    }
    if (event.key === "%") {

        if (porcentajeOn) {
            Swal.fire({
                html:`
                        <div class="container-fluid swalAlert">
                        <p class="swalAlertText" id="exampleModalLabel">
                            El porcentaje ya está seleccionado.
                        </p>
                        </div>
                `,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                background: `rgba(12, 12, 12, 0)`
              });
        } else {

            if (barraDeNumeros == "") {
                Swal.fire({
                    html:`
                            <div class="container-fluid swalAlert">
                            <p class="swalAlertText" id="exampleModalLabel">
                                Agrega un número.
                            </p>
                            </div>
                    `,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    background: `rgba(12, 12, 12, 0)`
                  });
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


/* ------------------------------------ */
/* Asignar nombre */
document.querySelector("#btnAsignarNombre").addEventListener("click", () => {

    if (document.querySelector("#portadorDeLaCalculadora").value.length < 10) {
        if (document.querySelector("#portadorDeLaCalculadora").value == "") {
            document.querySelector("#idcalcuAutor").innerHTML = `
            <p class="calcuAutorContent">Esta calculadora es de: <br> --- </p>
            `
        } else {
            document.querySelector("#idcalcuAutor").innerHTML = `
            <p class="calcuAutorContent">Esta calculadora es de: <br> ${document.querySelector("#portadorDeLaCalculadora").value} </p>
            `
        }
    }
})

/* ------ */
function evaluarSiTieneAlgunCroma(claseCroma) {
    if (document.querySelector("#idBodyIndex").classList.contains(claseCroma)) {
        document.querySelector("#idBodyIndex").classList.remove(claseCroma)
    }
}

function evaluarSiEstaSeleccionado(idDelCroma) {
    if (document.querySelector(idDelCroma).classList.contains("cromaSeleccionado")) {
        document.querySelector(idDelCroma).classList.remove("cromaSeleccionado")
    }
}


/* Asignar Croma */
document.querySelector("#btnAtardecer").addEventListener("click",()=>{
    evaluarSiTieneAlgunCroma("cromaCian")
    evaluarSiTieneAlgunCroma("cromaEscarlata")
    evaluarSiTieneAlgunCroma("cromaSquidSisters")

    evaluarSiEstaSeleccionado("#btnCian")
    evaluarSiEstaSeleccionado("#btnEscarlata")
    evaluarSiEstaSeleccionado("#btnSquidSisters")

    document.querySelector("#idBodyIndex").classList.add("cromaAtardecer")
    document.querySelector("#btnAtardecer").classList.add("cromaSeleccionado")
})

document.querySelector("#btnCian").addEventListener("click",()=>{
    evaluarSiTieneAlgunCroma("cromaAtardecer")
    evaluarSiTieneAlgunCroma("cromaEscarlata")
    evaluarSiTieneAlgunCroma("cromaSquidSisters")

    evaluarSiEstaSeleccionado("#btnAtardecer")
    evaluarSiEstaSeleccionado("#btnEscarlata")
    evaluarSiEstaSeleccionado("#btnSquidSisters")

    document.querySelector("#idBodyIndex").classList.add("cromaCian")
    document.querySelector("#btnCian").classList.add("cromaSeleccionado")
})

document.querySelector("#btnEscarlata").addEventListener("click",()=>{
    evaluarSiTieneAlgunCroma("cromaAtardecer")
    evaluarSiTieneAlgunCroma("cromaCian")
    evaluarSiTieneAlgunCroma("cromaSquidSisters")

    evaluarSiEstaSeleccionado("#btnAtardecer")
    evaluarSiEstaSeleccionado("#btnCian")
    evaluarSiEstaSeleccionado("#btnSquidSisters")

    document.querySelector("#idBodyIndex").classList.add("cromaEscarlata")
    document.querySelector("#btnEscarlata").classList.add("cromaSeleccionado")
})

document.querySelector("#btnSquidSisters").addEventListener("click",()=>{
    evaluarSiTieneAlgunCroma("cromaAtardecer")
    evaluarSiTieneAlgunCroma("cromaCian")
    evaluarSiTieneAlgunCroma("cromaEscarlata")

    evaluarSiEstaSeleccionado("#btnAtardecer")
    evaluarSiEstaSeleccionado("#btnCian")
    evaluarSiEstaSeleccionado("#btnEscarlata")

    document.querySelector("#idBodyIndex").classList.add("cromaSquidSisters")
    document.querySelector("#btnSquidSisters").classList.add("cromaSeleccionado")
})

