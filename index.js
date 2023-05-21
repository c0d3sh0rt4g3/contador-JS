// Una variable es un espacio para almacenar datos (por ahora simples).
let nFirstVer = 99
let nSecondVer = 0
let nMinCounter = 60

let intervalFirstVer
let intervalSecondVer
let clockInterval
let minCounterInterval
let customTimerInterval

let stopped
let stoppedMinCount

const cuentas= () => {
    // Con setInterval definimos acciones que se realizan cada cierto tiempo.
    // El tiempo se expresa en mil�simas de segundo.
    // En este caso se ejecuta marchaAtras cada segundo = 1000 miliseconds.
    stopped = false
    intervalFirstVer = setInterval(marchaAtrasFirstVer, 1000);
    intervalSecondVer = setInterval(marchaAtrasSecondVer, 1000);
}
const clock =() =>{
    stopped = false
    clockInterval = setInterval(updateClock, 1)
}
const cuentaAtrasMinuto = () => {
    stoppedMinCount = false
    minCounterInterval = setInterval(oneMinCount, 1000)
}
const customTimer = () => {
    customTimerInterval = setInterval(givenTimer, 1000)
}
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
    if (nFirstVer < 10){
        firstDigit.src = "img/0.png"
        secondDigit.src = "img/" + number + ".png"
    }else {
        firstDigit.src = "img/" + number[0] +".png"
        secondDigit.src = "img/" + number[1] +".png"
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
        firstDigit.src = "img/0.png"
        secondDigit.src = "img/0.png"
        thirdDigit.src = "img/" + number + ".png"
    }else if (nSecondVer <= 99){
        firstDigit.src = "img/0.png"
        secondDigit.src = "img/" + number[0] +".png"
        thirdDigit.src = "img/" + number[1] +".png"
    }else {
        firstDigit.src = "img/" + number[0] +".png"
        secondDigit.src = "img/" + number[1] +".png"
        thirdDigit.src = "img/" + number[2] + ".png"
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
        hourFirstDigit.src = "img/0.png"
        hourSecondDigit.src = "img/" + hourString + ".png"
    }else {
        hourFirstDigit.src = "img/" + hourString[0] + ".png"
        hourSecondDigit.src = "img/" + hourString[1] + ".png"
    }

    if (minutes <= 9){
        minFirstDigit.src = "img/0.png"
        minSecondDigit.src = "img/" + minuteString + ".png"
    }else {
        minFirstDigit.src = "img/" + minuteString[0] + ".png"
        minSecondDigit.src = "img/" + minuteString[1] + ".png"
    }

    if (seconds <= 9){
        secFirstDigit.src = "img/0.png"
        secSecondDigit.src = "img/" + secondString + ".png"
    }else {
        secFirstDigit.src = "img/" + secondString[0] + ".png"
        secSecondDigit.src = "img/" + secondString[1] + ".png"
    }

    hourSpan.appendChild(hourFirstDigit)
    hourSpan.appendChild(hourSecondDigit)

    minSpan.appendChild(minFirstDigit)
    minSpan.appendChild(minSecondDigit)

    secSpan.appendChild(secFirstDigit)
    secSpan.appendChild(secSecondDigit)
}
const oneMinCount = () =>{
    let minCountDown = document.getElementById("oneMinCountDown")

    let minCountFirstDigit = document.createElement("img")
    let minCountSecondDigit = document.createElement("img")

    let secCountFirstDigit = document.createElement("img")
    let secCountSecondDigit = document.createElement("img")

    let nMinCounterString = nMinCounter.toString()
    if (nMinCounter > 0){
        nMinCounter--
    } else{ setTimeout(closeWin, 2000) }

    minCountDown.innerHTML = ""

    if(nMinCounter === 59){
        minCountFirstDigit.src = "img/0.png"
        minCountSecondDigit.src = "img/1.png"
        secCountFirstDigit.src = "img/0.png"
        secCountSecondDigit.src = "img/0.png"
    }else if(nMinCounter <= 9) {
        minCountFirstDigit.src = "img/0.png"
        minCountSecondDigit.src = "img/0.png"
        secCountFirstDigit.src = "img/0.png"
        secCountSecondDigit.src = "img/" + nMinCounterString + ".png"
    }else {
        minCountFirstDigit.src = "img/0.png"
        minCountSecondDigit.src = "img/0.png"
        secCountFirstDigit.src = "img/" + nMinCounterString[0] + ".png"
        secCountSecondDigit.src = "img/" + nMinCounterString[1] + ".png"
    }

    minCountDown.appendChild(minCountFirstDigit)
    minCountDown.appendChild(minCountSecondDigit)

    minCountDown.appendChild(secCountFirstDigit)
    minCountDown.appendChild(secCountSecondDigit)
}
/*const givenTimer = () => {
    let customTimer = document.getElementById("customTimer")

    minutes = parseInt(document.getElementById("minutesWanted").value)
    seconds = parseInt(document.getElementById("secondsWanted").value)

    let minFirstDigit = document.createElement("img")
    let minSecondDigit = document.createElement("img")

    let secFirstDigit = document.createElement("img")
    let secSecondDigit = document.createElement("img")

    let minString = minutes.toString()
    let secString = seconds.toString()

    if (isNaN(minutes) && isNaN(seconds)){
        alert("ERROR: No se han introducido numeros ni en el campo de minutos ni en el de segundos")
    }else if (isNaN(minutes)){
        alert("ERROR: No se han introducido numeros en el campo de minutos")
    } else if (isNaN(seconds)){
        alert("ERROR: No se han introducido numeros en el campo de segundos")
    }else if(seconds > 59){
        alert("ERROR: El máximo de segundos admitidos es 59")
    }else if(minutes > 59){
        alert("ERROR: El máximo de minutos admitidos es 59")
    }

    if (seconds > 0){
        seconds--
    } else {
        seconds = 59
        minutes--
    }
    customTimer.innerHTML = ""

    if(minutes > 9){
        minFirstDigit.src = "img/" + minString[0] + ".png"
        minSecondDigit.src = "img/" + minString[1] + ".png"
    }else {
        minFirstDigit.src = "img/0.png"
        minSecondDigit.src = "img/" + minString + ".png"
    }

    if (seconds > 9){
        secFirstDigit.src = "img/" + secString[0] + ".png"
        secSecondDigit.src = "img/" + secString[1] + ".png"
    }else {
        secFirstDigit.src = "img/0.png"
        secSecondDigit.src = "img/" + secString + ".png"
    }

    customTimer.appendChild(minFirstDigit)
    customTimer.appendChild(minSecondDigit)

    customTimer.appendChild(secFirstDigit)
    customTimer.appendChild(secSecondDigit)
}*/
const stop = () => {
    clearInterval(intervalFirstVer)
    clearInterval(intervalSecondVer)
    clearInterval(clockInterval)
    return stopped = true
}
const reset = () => {
    nFirstVer = 99
    nSecondVer = 0
}
const resume = () => {
    if (stopped){
        cuentaAtras()
    }else {
        alert("ERROR: El contador no puede ser reanudado si no se ha pausado.")
    }
}
const stopMinCount = () => {
    clearInterval(minCounterInterval)
    return stoppedMinCount = true
}
const resetMinCount = () =>{
    nMinCounter = 60
}
const resumeMinCount = () =>{
    if (stoppedMinCount){
        cuentaAtrasMinuto()
    }else {
        alert("ERROR: El contador no puede ser reanudado si no se ha pausado.")
    }
}
const closeWin = () =>{
    window.close()
}