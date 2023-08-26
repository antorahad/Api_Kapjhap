document.getElementById('fetchData').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)

    .then(res => res.json())

    .then(userData => user(userData));


    function user(userData){

       const userId = document.getElementById('users-id'); 

       const userName = document.getElementById('users-name');

       const userEmail = document.getElementById('users-email');

       for(const user of userData){

            const liOne = document.createElement('li');

            liOne.innerText = user.username;

            userName.appendChild(liOne);


            const liTwo = document.createElement('li');

            liTwo.innerText = user.id;

            userId.appendChild(liTwo);


            const liThree = document.createElement('li');

            liThree.innerText = user.email;

            userEmail.appendChild(liThree);
       }
    }
});