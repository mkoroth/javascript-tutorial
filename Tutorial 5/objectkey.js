const object = {
    name: 'mithun',
    email: 'mithun@email.com',
    password: 'somepassword',
    createdAt: '2022-11-11:00:00:00'
}

console.log(object.name)

console.log(object['name'])

// TODO: you work for facebook and they don't want to store passwords anymore to keep accounts safe
// your job is to remove all the passwords from the list of users and then you want to replace the password with a new list of passwords object
// hint: link the passwords to the user so you can access the passwords later

const facebookUsers = [
    {
        name: 'mithun',
        email: 'mithun@email.com',
        password: 'somepassword',
        createdAt: '2022-11-11:00:00:00'
    },
    {
        name: 'dennis',
        email: 'dennis@email.com',
        password: 'test',
        createdAt: '2022-11-11:00:00:00'
    },
    {
        name: 'api',
        email: 'api@email.com',
        password: 'incoming',
        createdAt: '2022-11-11:00:00:00'
    }
]

const passwords = []
console.log(facebookUsers)

for (let i = 0; i < facebookUsers.length; i++) {
   
    const password = facebookUsers[i].password
    passwords.push(password)
    delete facebookUsers[i].password
 }

 console.log(passwords)
//  console.log(facebookUsers)

