// LESSON: objects
const data = require('./data.json')

const object = {
    name: "api",
    email: "api@email.com",
    phoneNumber: "4162000000",
    address: "123 main street",
    postalcode: "m9v4g9",
    altNumber:"3525225225"
}

// access objects
const name = object.name // 'api'
console.log(name)

const email = object.email
console.log(email)

object.name = "apinan"
console.log(object.name)

console.log(object)

const users = []

function createNewUser(name, email, phoneNumber, address, postalcode, altNumber) {
    const newUser = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        postalcode: postalcode,
        altNumber: altNumber,
    }
    users.push(newUser)
}

createNewUser('api', 'api@email.com', '134134124', '123 main street', 'm1d2d2', '123124')

const newUser1 = {
    name: "dennis",
    email: "dennis@email.com",
    phoneNumber: "4162000000",
    address: "123 main street",
    postalcode: "m9v4g9",
    school: {
        name: "morrison public school",
        address: "123 addy street",
        principal: "mr john",
        pricipalCar: {
            name: "bmw",
            horsePower: 54
        }
    }
}
users.push(newUser1)

console.log(users)

console.log(data.products[0])

// TODO: based on the data.json file, i want you to tell me the title of the id i give you
// this must be a function. the function takes in an id and it returns the title of the product id
function findTitleById(productId){
 const products = data.products
 let foundProduct
      
 for (let i = 0; i < products.length; i++) {
    console.log(products[i])
    const product = products[i]
    if (product.id === productId) {
        foundProduct = product
    }
}

return foundProduct.title
}


console.log(findTitleById(21))

// TODO: find the number of brands that are Apple

function findTitleById(productId){
    const products = data.products
    let foundProduct
         
    for (let i = 0; i < products.length; i++) {
       console.log(products[i])
       const product = products[i]
       if (product.id === productId) {
           foundProduct = product
       }
   }
   
   return foundProduct.title
   }
   

// TODO: find the number of brands that are giveString which is a parameter e.g. findNumberOfBrands('Samsung')
// TODO: find the total price of all the products
// TODO: find the number of products between the rating 3 to 5

