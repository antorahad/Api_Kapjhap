function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')

    .then(res => res.json())

    .then(data => console.log(data));
}

function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())

    .then(data => displayUsers(data));
}

function displayUsers(data){
    console.log(data);
}



const dreamGirl = [
    {
     sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
       {
        facebook: {
         link: "https://www.facebook.com/",
         followers: "12545",
         status: "single",
         friendsList: [{ name: "rofik" }, undefined],
        },
       },
       { instagram: "https://www.instagram.com/" },
      ],
     },
    },
   ];

   