// const { createDecipheriv } = require("crypto")
const events = ['keyup','change']

const cardName = document.getElementsByClassName('name')[0]
const cardNameDefault = cardName.innerText
const cardNameInput = document.getElementById('name')

const cardMoral = document.getElementsByClassName('moral')[0]
const cardMoralDefault = cardMoral.innerText
const cardMoralInput = document.getElementById('moral')

const cardHealth = document.getElementsByClassName('health')[0]
const cardHealthDefault = cardMoral.innerText
const cardHealthInput = document.getElementById('health')

const stats = document.getElementsByClassName('value')
const [cardMove, cardHit, cardDefense] = stats

const cardMoveDefault = cardMove.innerText
const cardHitDefault = cardHit.innerText
const cardDefenseDefault = cardDefense.innerText

const cardMoveInput = document.getElementById('move')
const cardHitInput = document.getElementById('hit')
const cardDefenseInput = document.getElementById('defense')

const abilitiesCheckbox = document.getElementById('abilities-checkbox');
const abilitiesContainer = document.getElementsByClassName('abilities-container-input')[0]
const addAbilityButton = document.getElementById('add-ability')

console.log("test")
// createDecipheriv
cardNameInput.addEventListener('keyup',(e) => {
    replaceValue(e,cardName, cardNameDefault)
})

events.forEach(event => cardMoralInput.addEventListener(event, (e) => {
    replaceValueSymbol(e,cardMoral, cardMoralDefault,'+')
}))

events.forEach(event => cardHealthInput.addEventListener(event,(e) => {
    replaceValue(e,cardHealth, cardHealthDefault)
}))

events.forEach(event => cardMoveInput.addEventListener(event,(e) => {
    replaceValueSymbol(e,cardMove, cardMoveDefault,"\"")
}))

events.forEach(event => cardHitInput.addEventListener(event,(e) => {
    replaceValueSymbol(e,cardHit, cardHitDefault,"+")
}))

events.forEach(event => cardDefenseInput.addEventListener(event,(e) => {
    replaceValueSymbol(e,cardDefense, cardDefenseDefault,"+")
}))

abilitiesCheckbox.addEventListener('change',(e) => {
    const isChecked = e.target.checked
    
    if(isChecked) abilitiesContainer.style.display = "flex"
    else abilitiesContainer.style.display = "none"
})

addAbilityButton.addEventListener('click', (e) => {
    const name = document.getElementById('ability-name')
    const desc = document.getElementById('ability-description')
    if(name.value !== "" && desc.value !== "") {
        createAbilityElement()
    }
})




function replaceValueSymbol (event, elem, defaultValue,symbol) {
    const value = event.target.value
    console.log(value)
    elem.innerText = `${value}${symbol}`
    if(value === "") elem.innerText = defaultValue
}

function replaceValue (event, elem, defaultValue) {
    const value = event.target.value
    console.log(value)
    elem.innerText = value
    if(value === "") elem.innerText = defaultValue
}

function createAbilityElement () {
    const nameElement =  document.getElementById('ability-name')
    const descElement =  document.getElementById('ability-description')

    const container = document.createElement('div')
    container.classList.add("ability-container")

    const name = document.createElement('span')
    name.classList.add("ability-name")
    name.innerText = nameElement.value

    const description = document.createElement('div')
    description.classList.add('ability-description')
    description.innerText =descElement.value

    const close = document.createElement('span')
    close.classList.add('close')
    close.innerText = 'X'

    container.appendChild(name)
    container.appendChild(description)
    container.appendChild(close)
    
    const abilitiesContainer = document.getElementsByClassName("abilities-container")[0]
    abilitiesContainer.appendChild(container)

    nameElement.value = ""
   descElement.value = ""
}

function returnElem (name) {
    return document.getElementsByClassName(name)[0]
}

function returnInput (name) {
    return document.getElementById(name)
}