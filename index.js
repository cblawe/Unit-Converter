/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = 3.281
const volume = 0.264
const mass = 2.204
const measure = [length, volume, mass]

const metricUnit = ["meters", "liters", "kilos"]
const imperialUnit = ["feet", "gallons", "pounds"]

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl =  document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const contentEl = [lengthEl, volumeEl, massEl]

function onButtonPress (buttontype) {
    let input = inputEl.value
    if (buttontype === 'reset') {
        input = 0
        inputEl.value = ""
    } 
    //generating Imperial and Metric conversions
    function generateImperial (conversion) {
        return (input * conversion).toFixed(3)
        }

    function generateMetric (conversion) {
        return (input / conversion).toFixed(3)
    }

    //rendering Conversions
    for (let i = 0; i < 3; i++) {
        contentEl[i].textContent = `${input} ${metricUnit[i]} = ${generateImperial(measure[i])} ${imperialUnit[i]} | 
        ${input} ${imperialUnit[i]} = ${generateMetric(measure[i])} ${metricUnit[i]}`
    }
}
               
convertBtn.addEventListener("click", function() {onButtonPress('convert')})

resetBtn.addEventListener("click", function() { onButtonPress('reset')})