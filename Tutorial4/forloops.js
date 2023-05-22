// for loops


// TODO: write a for loop to check how many numbers there are in any string i provide

// const starterString = 'mithun123412341234123412342342343214'

// let count = 0

// const numbers = '0123456789'

// for (let i = 0; i < starterString.length; i++) {
//     const character = starterString[i]
//     const isNumber = numbers.includes(character)
//     if (isNumber) {
//         count = count + 1 // count++
//     }
// }
// console.log(count)
// const doesNameIncludeRaj = numbers.includes("")

// TODO: write a for loop to check how many characters are lowercase in any string i provide

const starterString = 'Testing'
let count = 0

for (let i = 0; i < starterString.length; i++) {
    const character = starterString[i] // T
    const uppercaseCharacter = character.toUpperCase() // T
    console.log('character:', character, 'uppercase character:', uppercaseCharacter)
    if (character == uppercaseCharacter) {
        count = count + 1 // count++
    }
}
console.log(count)
