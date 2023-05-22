// LESSON: while loops

// let i = 0
// while (i <= 10) {
//     console.log('hello there')
//     i++
// }

// TODO: find the number of lowercase letters
// TODO: find the number of numbers
// TODO: find the number of uppercase letters

const starterString = "This is my Javascript Class 111"

let numberOfLowerCaseCharacters = 0
let numberOfUpperCaseCharacters = 0
let numberOfNumbers = 0

const numbers = '0123456789'

let i = 0

while (i < starterString.length) {
    const character = starterString[i]
    const lowercaseCharacter = character.toLowerCase()

    if (character == lowercaseCharacter) {
        numberOfLowerCaseCharacters = numberOfLowerCaseCharacters + 1
    } else {
        numberOfUpperCaseCharacters = numberOfUpperCaseCharacters + 1
    }

    if (numbers.includes(character)) {
        numberOfNumbers++
        // numberOfNumbers += 1
    }

    i++
}

console.log(`the number of lower case characters are: ${numberOfLowerCaseCharacters}.`)
console.log(`the number of upper case characters are: ${numberOfUpperCaseCharacters}.`)
console.log(`the number of numbers are: ${numberOfNumbers}.`)
