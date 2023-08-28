const user = {
    id: 1,
    name: 'Ghonchu',
    job: 'Writer'
}

console.log(user);

// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);

console.log(stringified);


const shop = {
    owner: 'Yellow',

    address: {
        street: 'Road no: 04',
        location: 'Mirpur 2, Mirpur'
    },

    products : ['Shirt', 'Pant', 'Shoes', 'Belt', 'Others'],

    revenue : 50000,

    isOpen : true,

    isNew : false
}


console.log(shop);

console.log(typeof shop);


const shopJson = JSON.stringify(shop);

console.log(shopJson);

console.log(typeof shopJson);


const shopObj = JSON.parse(shopJson);

console.log(shopObj);



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);