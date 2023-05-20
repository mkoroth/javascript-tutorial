// LESSON: complicated functions
function print(input) {
    console.log(input)
}

function countNumberOfStars(someString) {
    // TODO: return the number of '*' in a string

    let numberOfStarCharacters = 0
    for (let i = 0; i < someString.length; i++) {
        const character = someString[i] // T

        if (character == "*") {
            numberOfStarCharacters++
        }

    }
    return numberOfStarCharacters
}

function countNumberOfNumbers(someString) {
    const numbers = "0123456789"
    let numberOfNumbers = 0
    for (let i = 0; i < someString.length; i++) {
        const character = someString[i] // T

        if (numbers.includes(character)) {
            numberOfNumbers++
        }
    }
    return numberOfNumbers
}

// create the function here
// this takes two parameters
function countNumberOfCharacters(someString, someCharacter) {
    // someString = 'jdsf8sdgssag88*agSAD*AGD*ag'
    // someCharacter = 'x'
    let numberOfCharacters = 0
    for (let i = 0; i < someString.length; i++) {
        const character = someString[i] // T

        if (character == someCharacter) {
            numberOfCharacters++
        }

    }
    return numberOfCharacters
}

function sumAllNumbers(someString) {
    let sum = 0
    const numbers = '0123456789'
    
    for (let i = 0; i < someString.length; i++) {
        const character = someString[i] // T

        if (numbers.includes(character)) {
            const number = parseInt(character) // "8" -> 8
            sum = sum + number
        }

    }
    return sum
}




// testing
const numberOfStars = countNumberOfStars("jdsf8sdgssag88*agSAD*AGD*ag")
print(`the number of star characters are: ${numberOfStars}`)

const numberOfNumbers = countNumberOfNumbers("jdsf8sdgssag88*agSAD*AGD*ag")
print(`the count of number of numbers are: ${numberOfNumbers}.`)

// this takes two parameters not one like the countNumberOfStars function
// its similar to that function but not exactly the same
// create this function, ill be here to help
const numberOfCharacters = countNumberOfCharacters('jdxsf8sxdgssaxg88*agSAxD*AGD*ag', 'x')

print(`the count of number Of Characters: ${numberOfCharacters}.`)


const sumOfNumbers = sumAllNumbers('jdxsf8sxdgssaxg88*agSAxD*AGD*ag')
print(`the sum of Numbers: ${sumOfNumbers}.`)