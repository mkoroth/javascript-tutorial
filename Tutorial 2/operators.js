// LESSON: operators

/*
== equal to
> greater than
< less than
>= greater or equal to
<= less or equal to
!= not equal to
&& and
|| or
*/

// const myNumber = 10

// if (myNumber > 0) {
//     console.log("this number is positive")
// } else if (myNumber < 0) {
//     console.log("this number is negative")
// } else {
//     console.log("this number is 0")
// }

// if (myNumber >= 10) {
//     console.log(" this is a big number")
// } else {
//     console.log("this is a small number")
// }

// if (myNumber <= 10) {
//     console.log(" this is a small number")
// } else {
//     console.log("this is a big number")
// }

// if (myNumber == 10) {
//     console.log('this number is 10')
// }

// if (myNumber != 10) {
//     console.log('this number is not 10')
// }

// if (myNumber > 0 && myNumber < 5) {
//     console.log('this is a very small number')
// }

// if (myNumber == 5 || myNumber == 10) {
//     console.log('this is a multiple of 5')
// }


// TODO: write a program that takes myNumber and checks if it is odd or even. If myNumber is even, i want to check if it is 5 or 10 or 15 or 20.
// if it is ood, i want to check if it is greater than 0 and less than 100.
// finally if this number is greater than 100. i want to make sure it does not equal to 110

let myNumber = 19
let myNewNumber = myNumber % 2

if (myNewNumber == 0) {
    console.log("the number is even")

    if (myNewNumber == 5 || myNewNumber == 10 || myNewNumber == 15 || myNewNumber == 20) {
        console.log("the number is a multuple of 5")
    }

} else {
    console.log("the number is odd")

    if(myNewNumber > 0 && myNewNumber < 100) {
        console.log("the number is between 0 and 100")
    } else if (myNewNumber > 100 && myNewNumber != 110) {
        console.log("greater than 100 and not equal to 110")
    }

}
