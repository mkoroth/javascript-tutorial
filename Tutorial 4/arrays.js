// LESSON: arrays

// arrays are another data type in javascript
// similar to number, string, boolean, array is a data type that stores a list of these data types.

// for example: [1, 2, 3, 4, 5, 6] is an array (i.e. list)

// this is how you declare one
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const names = ['bensil', 'bensil abraham', 'ba', 'abraham']
const booleans = [true, false]
const randomTypes = [1, 'as', false]

const emptyArray = []

// this is how you add items to an array
emptyArray.push(1)
emptyArray.push('test')
emptyArray.push(true)

console.log(emptyArray) // [ 1, 'test', true ]

emptyArray.pop() // removes the last item in the array
console.log(emptyArray) // [1, 'test']

const isTestInArray = emptyArray.includes('test')
console.log(isTestInArray) // true

const newArray = emptyArray.concat(numbers)
console.log(newArray) // [1, 'test', 1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// get first item of array
const firstItem = numbers[0]
console.log(firstItem) // 1


const string = "mithun"
const nameArray = ['m', 'i', 't', 'h', 'u', 'n']

// change string letter
string[0] = 'l' // won't work because strings are not mutable in javascript. arrays are mutable in js

// change the first item of the array
nameArray[1] = 1
console.log(string, nameArray) // mithun [ 'm', 1, 't', 'h', 'u', 'n' ]


// TODO: create an array of 5 fruits. Then i want you to change the last fruit to myFruit and you should change this using both ways
// 1. using the pop, 2. using the index

const myFruit = 'mango'

const namesF = ['apple', 'banana', 'watermelon', 'pineapple','pears']

namesF.pop()
namesF.push('mango')
console.log(namesF)

// [ 'apple', 'banana', 'watermelon', 'pineapple', 'mango' ]

namesF[4] = 'cherry'
console.log(namesF)

const usernames = ['asfs*asdfs*asf*', 'asdf*asdf***asdga;*', 'asf;lkasdf', '2134214asf', 'strewqs']


function countStars(string) {
    let count = 0
    for (let i = 0; i< string.length; i++) {
        if (string[i] == '*') {
            count++
        }
    }

    return count
}


for (let i = 0; i < usernames.length; i++) {
    console.log(usernames[i])
    const userNameStarCount = countStars(usernames[i])
    console.log(userNameStarCount)
}

const testArray = ['mithun', 'javascript', 'class']
const indexOfJavascript = testArray.indexOf('javascript')
console.log(indexOfJavascript)

testArray.splice(indexOfJavascript, 1)
console.log(testArray)


function combineArrays(array1, array2) {
    const newArray = array1
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])
    }
    return newArray
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newlyArray = combineArrays(arr1, arr2)
console.log(newlyArray)


