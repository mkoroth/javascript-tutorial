/*
    2. For Loops: Write a function called calculateSum that takes an array of numbers as an argument and uses a 
    for loop to calculate and return the sum of all the numbers in the array.
*/
 
function calculateSum(array2) {
    let sum = 0
    
      
    for (let i = 0; i < array2.length; i++) {
        const number = array2[i] // T

        sum = sum + number
    }
    return sum
}

console.log('sum:', calculateSum([1, 2, 3]))
