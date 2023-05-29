// TODO: create a program that finds the number of * in a string, finds the number of the letter 'a' in a string 
// and finds the sum of all the numbers (do this using for loop and using while loop)
//const myString = 'asdf*asdf*8**asdf234asdf'


// PART 1:
// const myString = 'asdf*asdf*8**asdf234asdf'

// let numberOfStarCharacters = 0
// let numberOfACharacters = 0
// let sumOfNumbers = 0

// const numbers = '0123456789'

// let i = 0

// while (i < myString.length) {
//     const character = myString[i]
    

//     if (character == "*") {
//         numberOfStarCharacters = numberOfStarCharacters + 1
//     } else if(character == "a"){
//             numberOfACharacters = numberOfACharacters + 1
//     }

//     if (numbers.includes(character)) {
//         const number = parseInt(character) // "8" -> 8
//         sumOfNumbers = sumOfNumbers + number
//     }

//     i++
// }

// console.log(`the number of star characters are: ${numberOfStarCharacters}.`)
// console.log(`the number of A characters are: ${numberOfACharacters}.`)
// console.log(`the sum of numbers are: ${sumOfNumbers}.`)


// FOR LOOP PART:
/* const myString = 'asdf*asdf*8**asdf234asdf'

let numberOfStarCharacters = 0
let numberOfACharacters = 0
let sumOfNumbers = 0

const numbers = '0123456789'


for (let i = 0; i < myString.length; i++) {
    const character = myString[i] // T

    if (character == "*") {
        numberOfStarCharacters++
    } else if (character == "a") {
        numberOfACharacters++
    }

    if (numbers.includes(character)) {
        const number = parseInt(character) // "8" -> 8
        // sumOfNumbers = sumOfNumbers + number
        sumOfNumbers += number // same thing as above
    }

}
console.log(`the number of star characters are: ${numberOfStarCharacters}.`)
console.log(`the number of A characters are: ${numberOfACharacters}.`)
console.log(`the sum of numbers are: ${sumOfNumbers}.`) */

 
// PART 2:
// TODO: create a function that takes 3 parameters and returns the sum of the numbers
function print(input) {
    console.log(input)
}
function findFunction(num1, num2, num3) {
    const SumOfNumbers = (num1 + num2 + num3)
    return SumOfNumbers
}
const receivedParaments = findFunction(12,20,30)
print(receivedParaments)