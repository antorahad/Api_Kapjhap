document.getElementById('fetchData').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)

    .then(res => res.json())

    .then(data => getData(data));


    function getData(data){
        
        const postId = document.getElementById('post-id');

        const postTitle = document.getElementById('post-title');

        const postBody = document.getElementById('post-body');

        for(const post of data){
            const liOne = document.createElement('li');

            liOne.innerText = post.id;

            liOne.style.listStyle = 'none';
            liOne.style.margin = '15px 0';

            postId.appendChild(liOne);


            const liTwo = document.createElement('li');

            liTwo.innerText = post.title;

            liTwo.style.listStyle = 'none';
            liTwo.style.margin = '15px 0';

            postTitle.appendChild(liTwo);


            const liThree = document.createElement('li');

            liThree.innerText = post.body;

            liThree.style.listStyle = 'none';
            liThree.style.margin = '15px 0';

            postBody.appendChild(liThree);

        }
    }
});