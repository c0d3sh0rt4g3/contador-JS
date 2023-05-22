// Una variable es un espacio para almacenar datos (por ahora simples).
let nFirstVer = 99
let nSecondVer = 0
let nMinCounter = 60
let clockCounter = 3600

let intervalFirstVer
let intervalSecondVer
let clockInterval
let minCounterInterval

let stoppedFirst
let stoppedSecond
let stoppedMinCount
let stoppedClock;

const startFirstCount = () => {
    stoppedFirst = false
    intervalFirstVer = setInterval(marchaAtrasFirstVer, 1000);
}

const startSecondCount = () => {
    stoppedSecond = false
    intervalSecondVer = setInterval(marchaAtrasSecondVer, 1000);
}

const clock =() =>{
    clockInterval = setInterval(updateCountdown, 1000);
}
const cuentaAtrasMinuto = () => {
    stoppedMinCount = false
    minCounterInterval = setInterval(oneMinCount, 1000)
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

function updateCountdown() {
    const countdownElement = document.getElementById('reloj')

    countdownElement.innerHTML = ""

    let hourFirstDigit = document.createElement("img")
    let hourSecondDigit = document.createElement("img")

    let minFirstDigit = document.createElement("img")
    let minSecondDigit = document.createElement("img")

    let secFirstDigit = document.createElement("img")
    let secSecondDigit = document.createElement("img")

    const hoursRemaining = Math.floor(clockCounter / 3600)
    const minutesRemaining = Math.floor((clockCounter % 3600) / 60)
    const secondsRemaining = Math.floor(clockCounter % 60)


    const hourString = hoursRemaining.toString()
    const minuteString = minutesRemaining.toString()
    const secondString = secondsRemaining.toString()

    if (hoursRemaining <= 9){
        hourFirstDigit.src = "img/0.png"
        hourSecondDigit.src = "img/" + hourString + ".png"
    }else {
        hourFirstDigit.src = "img/" + hourString[0] + ".png"
        hourSecondDigit.src = "img/" + hourString[1] + ".png"
    }

    if (minutesRemaining <= 9){
        minFirstDigit.src = "img/0.png"
        minSecondDigit.src = "img/" + minuteString + ".png"
    }else {
        minFirstDigit.src = "img/" + minuteString[0] + ".png"
        minSecondDigit.src = "img/" + minuteString[1] + ".png"
    }

    if (secondsRemaining <= 9){
        secFirstDigit.src = "img/0.png"
        secSecondDigit.src = "img/" + secondString + ".png"
    }else {
        secFirstDigit.src = "img/" + secondString[0] + ".png"
        secSecondDigit.src = "img/" + secondString[1] + ".png"
    }

    countdownElement.appendChild(hourFirstDigit)
    countdownElement.appendChild(hourSecondDigit)

    countdownElement.appendChild(minFirstDigit)
    countdownElement.appendChild(minSecondDigit)

    countdownElement.appendChild(secFirstDigit)
    countdownElement.appendChild(secSecondDigit)

    // Resta 1 segundo al tiempo restante
    clockCounter--;
}

const stopFirst = () => {
    clearInterval(intervalFirstVer)
    return stoppedFirst = true
}
const stopSecond = () => {
    clearInterval(intervalSecondVer)
    return stoppedSecond = true
}

const resetFirst = () => {
    nFirstVer = 99
}
const resetSecond = () =>{
    nSecondVer = 0
}
const resumeFirst = () => {
    if (stoppedFirst){
        startFirstCount()
    }else {
        alert("ERROR: El contador no puede ser reanudado si no se ha pausado.")
    }
}

const resumeSecond = () => {
    if (stoppedSecond){
        startSecondCount()
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