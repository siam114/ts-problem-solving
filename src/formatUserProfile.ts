// type User = {
//     name: string
//     age: number
//     city: string
// }

interface User {
    name: string
    age: number
    city: string
}

const formatUserProfile = (user:User):string=>{
    return `${user.name} is ${user.age} years old and live in ${user.city}`
}

console.log(formatUserProfile({
    name: "Siam",
    age: 22,
    city: "Dhaka"
}))