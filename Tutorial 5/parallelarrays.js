// LESSON: parallel arrays

// parallel arrays are two or more arrays to keep track of data for a particular item

// for example. rlets say we wanted to stoe some data for a person
// ip address, email, phone number, username, password

// this is hard to store all at once without creating alot of variables
// in this case, we can just create as many arrays to store each type and we can store this for as many users as we want

/* const names = []
const usernames = []
const emails = []
const phoneNumbers = []
const ipAddress = []
const passwords = []

names.push('mithun')
usernames.push('mithun')
emails.push('mithun@email.com')
phoneNumbers.push('4105555555')
ipAddress.push('192.168.0.0')
passwords.push('test password')

names.push('api')
usernames.push('api')
emails.push('api@email.com')
phoneNumbers.push('4105555555')
ipAddress.push('192.168.0.0')
passwords.push('api password')

for (let i=0; i<names.length; i++) {
    console.log(names[i], usernames[i], emails[i], phoneNumbers[i], ipAddress[i], passwords[i])
} */


// TODO: create a parallel array to store name and email and then print these results (i want 5 user data) and print it
 
const names = []
const emails = []
function createUser (name,email){

names.push(name)
emails.push(email)

}


createUser('api', 'api@email.com')
createUser('denis', 'denis@email.com')
createUser('vivek', 'vivek@email.com')
createUser('red', 'red@email.com')
createUser('deepak', 'deepak@email.com')


for (let i=0; i<names.length; i++) {
    console.log(names[i], emails[i])
}
