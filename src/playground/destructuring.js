// const person = {
//     name: 'DanM',
//     age: 37,
//     location: {
//         city: 'Golan Heights',
//         temp: 24
//     }
// };
//
// const {name, age} = person;
// const {city, temp} = person.location;
//
// console.log(`its ${temp} at ${city}`);
//
// const book = {
//     title: 'ego',
//     author: 'test',
//     publisher: {
//         name: 'shushan'
//     }
// }
//
// const {name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(publisherName);


//arrays
const addressArr = ['neot golan golan heights', 'israel', '12925'];

const [address, country, zip] = addressArr;

console.log(`You are in ${address}, ${country} ${zip}`);