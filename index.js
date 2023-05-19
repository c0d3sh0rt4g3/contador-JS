// Una variable es un espacio para almacenar datos (por ahora simples).
let nFirstVer = 99
let nSecondVer = 999

let intervalFirstVer
let intervalSecondVer
let clockInterval

let stopped
// Funcion que se ejecuta al abrir la pagina y que define lo se hace cada segundo
const cuentaAtras = () => {
    // Con setInterval definimos acciones que se realizan cada cierto tiempo.
    // El tiempo se expresa en mil�simas de segundo.
    // En este caso se ejecuta marchaAtras cada segundo = 1000 milisegundos.
    stopped = false
    intervalFirstVer = setInterval(marchaAtrasFirstVer, 1000);
    intervalSecondVer = setInterval(marchaAtrasSecondVer, 1000);
    clockInterval = setInterval(updateClock, 1000)
}

//
const marchaAtrasFirstVer = () => {
    // Esta instrucci�n ejecuta c�digo condicional.
    // La parte del 'if' si se cumple la condici�n y
    // la del 'else' si no se cumple.
    let numbersDiv = document.getElementById("numerosPrimeraVer")
    let firstDigit =  document.createElement("img")
    let secondDigit =  document.createElement("img")

    let number = nFirstVer.toString()

    if (nFirstVer > 0){
        nFirstVer--
    } else{ nFirstVer = 99 }
    numbersDiv.innerHTML = ""
    // Cambiamos parte de la p�gina usando DOM
    if (nFirstVer <= 9){
        firstDigit.src = "0.png"
        secondDigit.src = nFirstVer + ".png"
    }else {
        firstDigit.src = number[0] +".png"
        secondDigit.src = number[1] +".png"
    }

    numbersDiv.appendChild(firstDigit)
    numbersDiv.appendChild(secondDigit)
}

const marchaAtrasSecondVer = () => {
    let numbersDiv = document.getElementById("numerosSegundaVer")
    let firstDigit = document.createElement("img")
    let secondDigit = document.createElement("img")
    let thirdDigit = document.createElement("img")
    let number = nSecondVer.toString()

    if (nSecondVer < 999){
        nSecondVer++
    } else{ nSecondVer = 0 }
    numbersDiv.innerHTML = ""
    if (nSecondVer <= 9){
        firstDigit.src = 0 + ".png"
        secondDigit.src = nSecondVer + ".png"
    }else if (nSecondVer <= 99){
        firstDigit.src = "0.png"
        secondDigit.src = number[0] +".png"
        thirdDigit.src = number[1] +".png"
    }else {
        firstDigit.src = number[0] +".png"
        secondDigit.src = number[1] +".png"
        thirdDigit.src = number[2] + ".png"
    }

    numbersDiv.appendChild(firstDigit)
    numbersDiv.appendChild(secondDigit)
    numbersDiv.appendChild(thirdDigit)
}

const updateClock = () => {

    let hourSpan = document.getElementById("hourSpan")
    let minSpan = document.getElementById("minSpan")
    let secSpan = document.getElementById("secSpan")

    hourSpan.innerHTML = ""
    minSpan.innerHTML = ""
    secSpan.innerHTML = ""

    let hourFirstDigit = document.createElement("img")
    let hourSecondDigit = document.createElement("img")

    let minFirstDigit = document.createElement("img")
    let minSecondDigit = document.createElement("img")

    let secFirstDigit = document.createElement("img")
    let secSecondDigit = document.createElement("img")

    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const hourString = hours.toString()
    const minuteString = minutes.toString()
    const secondString = seconds.toString()

    if (hours <= 9){
        hourFirstDigit.src = "0.png"
        hourSecondDigit.src = hourString + ".png"
    }else {
        hourFirstDigit.src = hourString[0] + ".png"
        hourSecondDigit.src = hourString[1] + ".png"
    }

    if (minutes <= 9){
        minFirstDigit.src = "0.png"
        minSecondDigit.src = minuteString + ".png"
    }else {
        minFirstDigit.src = minuteString[0] + ".png"
        minSecondDigit.src = minuteString[1] + ".png"
    }

    if (seconds <= 9){
        secFirstDigit.src = "0.png"
        secSecondDigit.src = secondString + ".png"
    }else {
        secFirstDigit.src = secondString[0] + ".png"
        secSecondDigit.src = secondString[1] + ".png"
    }

    hourSpan.appendChild(hourFirstDigit)
    hourSpan.appendChild(hourSecondDigit)

    minSpan.appendChild(minFirstDigit)
    minSpan.appendChild(minSecondDigit)

    secSpan.appendChild(secFirstDigit)
    secSpan.appendChild(secSecondDigit)
}

const stop = () => {
    clearInterval(intervalFirstVer)
    clearInterval(intervalSecondVer)
    clearInterval(clockInterval)
    return stopped = true
}

const reset = () =>{
    nFirstVer = 99
    nSecondVer = 999
}

const resume = () =>{
    if (stopped){
        cuentaAtras()
    }else {
        alert("ERROR: El contador no puede ser reanudado si no se ha pausado.")
    }
}