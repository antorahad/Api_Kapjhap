const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();

    const phones = data.data;

    //console.log(phones);

    displayPhones(phones)
}


const displayPhones = phones => {
    //console.log(phones);

    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.innerHTML = '';


    phones.forEach(phone => {
        console.log(phone);

        const phoneCard = document.createElement('div');

        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl py-[20px] my-[15px]`;


        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `

        phoneContainer.appendChild(phoneCard);
    });
}


const searchHandler = () => {
    const searchInput = document.getElementById('search-input');

    const searchValue = searchInput.value;

    loadPhone(searchValue);
}

//loadPhone();