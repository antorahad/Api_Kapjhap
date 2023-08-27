document.getElementById('get-user').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    
        fetch(url)
    
        .then(res => res.json())
    
        .then(data => findUser(data));

    function findUser(userData){
    
        const userContainer = document.getElementById('user-container');
    
        for(const user of userData){
            const userTable = document.createElement('tr');
    
            userTable.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `
    
            userContainer.appendChild(userTable);
        }
    }
});