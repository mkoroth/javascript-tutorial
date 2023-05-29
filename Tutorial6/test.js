/* // question 1

const array = ['hello','morning','walmart']
console.log(array.length)

//question 2
function addElementToEnd (array , element){
    array.push(element);
    return array
    


}
console.log(addElementToEnd(['t','g','r'],'e')) */

function doesArrayContain (array , element){
    
   if(array.includes(element)){
    return true
   }else {
    return false
   }
   
    
}
console.log(doesArrayContain(['apple','pepper','strawberry'],'strawberry'))