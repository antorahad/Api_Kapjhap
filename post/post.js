function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')

        .then(res => res.json())

        .then(data => getPost(data));
}


function getPost(posts) {
    const postContainer = document.getElementById('post-container');

    for (const post of posts) {
        const div = document.createElement('div');

        div.innerHTML = `
        <p>${post.id}</p>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
        ` ;

        div.classList.add('post');

        postContainer.appendChild(div);
    }
}

loadPosts();



