// /let er et nøkkelord for å lage en ny variabel
// "greeting"
//"=" lagre verdier på høyre side i navnet på venstre
//god morgen kodeloftet er verdien som blir lagret"
let greeting = 'God Morgen Kodeloftet'

// skriv innholdet i "greeting" variabelen til konsollen
console.log(greeting)

let numberA = 10
let numberB = 32

console.log("Tall A:")
console.log(numberB)

console.log("Tall B:")
console.log(numberB)

let numberC = numberA / numberB + numberA - numberB

console.log ("Tall C:")
console.log (numberC)

// grunnleggende datatyper

// stringer (tekst)
let stringA = "hello"
let stringB = 'world'
let stringC = `!!!`

let stringD = " Lets 'GO'!"
console.log(stringD)

let newLine = "Hello\n\n\nWorld"
console.log(newLine)
let multiLine = `
Testing
Testing
Testing
`
console.log(multiLine)
    
// Number
let a = 10

// Boolean
let boolTrue = true
let boolFalse = false

let isPasswordValid = false

let x = 10
let y = 20
let isEqual = x === y
console.log("is the numbers equal")
console.log(isEqual)
    
let nameA = "Lars"
let nameB = "Tanja"
let isNamesEqual =nameA === nameB
console.log("is the names equal")
console.log(isNamesEqual)

// udefinert
let thisIsUndefined
console.log("this is undefined")
console.log(thisIsUndefined)
    
    // null
    let doesNotYetHaveValue = null
    console.log("The following does not yet have a value")
    console.log(doesNotYetHaveValue)

    // Komplekse datatyper


// array (lists)
let arrayA = [
    "Per",
    "Pål",
    "Espen",
    "Martha",
]

console.log("This is an array (list)")
console.log(arrayA)

console.log("Accessing a single entry")
console.log(arrayA[3])

// Object

let personA = {
name: "Espen",
proffession: "Eventyr Figur",
age: "18",
eyecolor: "blue"
}

console.log("This is a collection of variables(object)")
console.log(personA)

console.log("Accessing a single entry in an object")
console.log(personA ["proffession"])
console.log(personA.eyecolor)

// inbuilt objects
console.log(console)
console.error("This is an error")