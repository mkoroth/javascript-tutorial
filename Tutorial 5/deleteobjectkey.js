const object = {
    name: 'mithun',
    email: 'mithun@email.com',
    password: 'somepassword',
    createdAt: '2022-11-11:00:00:00'
}

console.log(object)

delete object.name
console.log(object)

// delete object.createdAt
object.createdAt = '2022-11-12:00:00:00'
console.log(object)
