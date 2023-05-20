// LESSON: string manipulation

// const name = 'mithun rajan'

// indexing a string (we only want one character)
// const firstLastNameLetter = name[7]
// console.log(firstLastNameLetter) // prints 'r'

// substring (we want multiple characters i.e. a subword of the string)
// const name = 'hello there my name is mithun rajan'
// const subString = name.substring(23) // prints 'mithun rajan'
// console.log(subString)

// TODO: i want you to write a program that checks for every character in the string myString and counts how many vowels there are

// const myString = 'hello there my name is api and i am in university. i am studying math and stats. i want to become an engineer.'

// // start here:
// let count = 0

// // make an if statement. if myString[0] is equal to a vowel, add one to count variable or else check the next letter and repeat

// const a ="a"
// const e = "e"
// const i = "i"
// const o ="o"
// const u ="u"


// if(myString[0] == a || myString[0] == e || myString[0] == i || myString[0] == o || myString[0] == u){
//     count = count+1
    
// }
// if(myString[1] == a || myString[1] == e || myString[1] == i || myString[1] == o || myString[1] == u){
//     count = count+1                         
// }

// if(myString[2] == a || myString[2] == e || myString[2] == i || myString[2] == o || myString[2] == u){
//     count = count+1                         
// }
// if(myString[3] == a || myString[3] == e || myString[3] == i || myString[3] == o || myString[3] == u){
//     count = count+1
    
// }
// if(myString[4] == a || myString[4] == e || myString[4] == i || myString[4] == o || myString[4] == u){
//     count = count+1                         
// }

// if(myString[5] == a || myString[5] == e || myString[5] == i || myString[5] == o || myString[5] == u){
//     count = count+1                         
// }
// console.log(count)
const myString = 'hello there my name is api and i am in university. i am studying math and stats. i want to become an engineer. today is may and next month is june'

// first place of the for loop is where we set the initial variable
// second place of the for loop is where we set the condition to continue the loop. Once this condition evaluate to false it will stop otherwise it will run
// third place of the for loop tells you the incrementation of the initial variable (first place)
let count = 0
for (let i = 0; i < myString.length; i++) {
    const character = myString[i]
    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        count = count + 1 // count++
    }
}
console.log(count)

// THIS IS VERY ANNOYING
// WE NEED A BETTER SOLUTION

// NEXT CLASS: find a better solution