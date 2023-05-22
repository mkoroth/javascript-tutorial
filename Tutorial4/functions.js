// LESSON: functions


// defines the function
function print(input) {
    console.log(input)
}

// print('hi there how are you') // calls the function
// print('im doing good')
// print('how about you')
// print('im good also')


// we want to know if a number is even or odd
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// print(`is 10 even: ${isEven(10)}`)
// print(`is 11 even: ${isEven(11)}`)
// print(`is 12 even: ${isEven(12)}`)

// 10/20 = 50%
// 15/20 = 75%
// (10 / 20) * 100     0.5 * 100
function findPercentage(num1, num2) {
    const percent = (num1 / num2) * 100
    return percent
}
const receivedPercent = findPercentage(13,95)
print(`${receivedPercent}%`)

function add(num1, num2) {
    return num1 + num2
}
