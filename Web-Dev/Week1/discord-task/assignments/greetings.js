function userId(users) {
    
    return "Greetingd" + users.age + users.firstName;
}
const users = {
    firstName: 'saif',
    age: 18

}
let result = userId(users);
console.log(result);