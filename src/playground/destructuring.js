// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'los-angeles',
//     temp: 92
//   }
// };

// const {name, age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}.`)

// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
    
//   }
// };

// const {name: publisherName = 'self-pub'} = book.publisher

// console.log(publisherName);

// const address = ['1299 5 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const address = [] 



// const [street, city, state, zip] = address;
// const [, city, state] = address;
const [, , state = 'New York'] = address;


console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, ,price] = item
console.log(`A medium ${coffee} costs ${price}`)