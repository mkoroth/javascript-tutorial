// TODO: create a function that takes in a string and a number
// and it should return the number of characters with that number
// (hint: check stackoverflow to convert a number to a string)
// test('s12o1meast1ra1ing', 1) -> 4
// assume num can be any number between 0-9

function countCharactersWithNumber(nString, num){

    let count = 0
    
    for (let i = 0; i < nString.length; i++) {
        const character = nString[i]
        if (character === num.toString()){
            count++
        }
    }

    return count
    
    
}
// const resultNew = countCharactersWithNumber('s12o1meast1ra1ing', 1)
// console.log(resultNew)

// TODO: create a function that takes a character and number as an input and returns a string with that many characters
// example: i pass in test('a', 10), output should be 'aaaaaaaaaa'





function print(input) {
    console.log(input)
}



/*
// startCharacter is any character
// number is any number
// e.g. 
// const newString = characterNumber('a', 10)
// console.log(newString) // 'aaaaaaaaaa'
*/
function characterNumber(startCharacter, number) {
       
    let newString = 'aaaa'
    for (let i = 0; i < number; i++) {
        //   newString = newString + startCharacter
        newString += startCharacter
    }

    return newString

}

// console.log(characterNumber('a', 20))


// print(isNumber)

// print(`string with that many characters: ${isNumber}.`)




// // TODO: calculate the average of grades array. use a for loop
const grades = [10, 20 , 30, 40]

let sum = 0
let avg = 0


for (i = 0; i < grades.length ; i++) {
     sum += grades[i];
}
if (grades.length > 0) {
   avg = sum / grades.length;
   print(`${avg}`)
} else {
    print(`no grades available to determine the avg`)
}

// TODO: create a function that takes in a string and number and returns the number
// which then returns a string with that many characters but this time
// it should be any case i put as input
// example: i pass in testfunction('a', 10), output should be 'aaaaaaaaaa'
// example: testfunction('A', 10), output should be 'aaaaaaaaaa'


function stringNumber(characterString, number) {
    let newString = characterNumber(characterString, number)
    newString = newString.toLowerCase()
    return newString
}

/* const result = stringNumber('A', 10) // 'aaaaaaaaaa'
console.log(result) */
