/*
    1. Increment: Write a function named incrementArray that takes an array of integers as an input,
    increments each number by 1, and then returns the new array.
*/

function incrementArray(array1) {
   
    const newArray = []
    for (let i = 0; i < array1.length; i++) {
       const currentNumber = array1[i]
       const newNumber = currentNumber + 1
       newArray.push(newNumber)
    }
    return newArray
}


console.log('new array:', incrementArray([34, 45, 234, 56, 2, 3, 5, 234, 23]))
