// let food_in_stock = new Promise((resolve, reject) => {
//     let in_stock = true;

//     in_stock ? resolve("Food is in stock") :
//         reject("Food is not in stock");
// })
// let sufficient_funds = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Sufficient Funds"), 1000)
//     })
// }
// let transaction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Transaction Went through"), 1000)
//     })
// }

// Promise.all([food_in_stock, sufficient_funds(), transaction()])
//     .then((values) => console.log(values));


// most common use for Promise is for asyncFunctions like ajax or timeout calls
// const asyncFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => alert("From asyncFunction!"), 1000);
//         resolve();
//     })
// }
// asyncFunction();
// alert("Wait for async function");


let users = [
    {
        id: 1,
        name: 'Jericho',
        is_active: true,
        age: 30,
    },
    {
        id: 2,
        name: 'Joseph',
        is_active: true,
        age: 31,
    },
    {
        id: 3,
        name: 'Strongman',
        is_active: false,
        age: 44,
    },
];
// const names = []
// users.forEach(user => {
    //     names.push(user.name);
    // });


// const names = users.map(user => user.name);



// Returning array of names using the map function from an object array of users as well as filtering by active status using the filter method
const names = users
    .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
    .filter(user => user.is_active)
    .map(user => user.name);


console.log(names);



