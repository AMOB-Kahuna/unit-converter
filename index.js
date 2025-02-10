/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#conversion-value")
const convertBtn = document.querySelector("#convert-btn")
const lenghtResult = document.querySelector("#length")
const volumeResult = document.querySelector("#volume")
const massResult = document.querySelector("#mass")

function meterToFeet(num) {
    return Number(num.value) * 3.281
}

function feetToMeter(num) {
    return Number(num.value) * 0.304
}

function literToGallon(num) {
    return Number(num.value) * 0.264
}

function gallonToLiter(num) {
    return Number(num.value) * 3.788
}

function kiloToPound(num) {
    return Number(num.value) * 2.204
}

function poundToKilo(num) {
    return Number(num.value) * 0.453
}

function render(unit, firstUnit, secondUnit, firstConversion, secondConversion) {
    unit.textContent = `${inputEl.value} ${firstUnit} = ${firstConversion.toFixed(3)} ${secondUnit} | ${inputEl.value} ${secondUnit} = ${secondConversion.toFixed(3)} ${firstUnit}`
 }
    
    convertBtn.addEventListener("click", function() {
    render(lenghtResult, "meter", "feet", meterToFeet(inputEl), feetToMeter(inputEl))
    render(volumeResult, "liter", "gallon", literToGallon(inputEl), gallonToLiter(inputEl))
    render(massResult, "kilogram", "pound", kiloToPound(inputEl), poundToKilo(inputEl))
})
