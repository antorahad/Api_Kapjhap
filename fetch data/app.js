document.getElementById('fetchData').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)

    .then(res => res.json())

    .then(userData => user(userData));


    function user(userData){
        console.log(userData);
    }
});

document.getElementById('fetchPhoto').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/photos'

    fetch(url)

    .then(res => res.json())

    .then(photo => fetchPhoto(photo));

    function fetchPhoto(photo){
        console.log(photo);
    }
});