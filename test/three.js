/*
    3. While Loops: Write a function named findElement that accepts an array and a value.
    The function should use a while loop to find and return the index of the first occurrence of the value in the array.
    If the value is not found, return -1.
*/

function findElement(array3,value) {
    //const starterString = "This is my Javascript Class 111"

    let i = 0
   

 while (i < array3.length ) {
    
  const item = array3[i]
if(item === value){
 return i
}
    
  i++
}
}

console.log('index:', findElement([10, 20, 30, 'sketchers', 'apple'], 20))
