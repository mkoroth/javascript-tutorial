// LESSON: remainder with odd even

const myNumber = 8

const remainder = myNumber % 2

// TODO: if my number is even, print this is even, else if the number is odd, print this is odd
if (remainder == 0) {
    console.log("the number is even")
} else {
    console.log("the number is odd")
}

// second way:
if (remainder == 0) {
    console.log("the number is even")
} else if (remainder == 1) {
    console.log("the number is odd")
}

// third way
if (myNumber % 2 == 0) {
    console.log("this number is even")
} else {
    console.log("this number is odd")
}
