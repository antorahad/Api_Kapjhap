const loadPhone = async (searchText = 'iphone', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();

    const phones = data.data;

    //console.log(phones);

    displayPhones(phones, isShowAll)
}


const displayPhones = (phones, isShowAll) => {
    
    console.log(phones);

    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.innerHTML = '';


    const showAllContainer = document.getElementById('show-all-container');

    if(phones.length > 6 && !isShowAll){
      showAllContainer.classList.remove('hidden');
    }

    else{
      showAllContainer.classList.add('hidden');
    }

    
    if(!isShowAll){
      phones = phones.slice(0,6);
    }

    phones.forEach(phone => {
        console.log(phone);

        const phoneCard = document.createElement('div');

        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl py-[20px] my-[15px]`;


        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary" onclick = "showDetail('${phone.slug}')">Show Details</button>
          </div>
        </div>
        `

        phoneContainer.appendChild(phoneCard);
    });

    loader(false);
}


const showDetail = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

    const data = await res.json();

    const phone = data.data;

    showPhoneDetails(phone);
}


const showPhoneDetails = (phone) => {

    const phoneName = document.getElementById('show-detail-phone-name');

    phoneName.innerText = phone.name;

    const detailContainer = document.getElementById('show-detail-container');

    detailContainer.innerHTML = `
    <img src='${phone.image}' alt= ''/>
    <P><span class = 'font-bold'>Storage :<span> ${phone?.mainFeatures?.storage}</p>
    <P><span class = 'font-bold'>Display :<span> ${phone?.mainFeatures?.displaySize}</p>
    <P><span class = 'font-bold'>Chipset :<span> ${phone?.mainFeatures?.chipSet}</p>

    <P><span class = 'font-bold'>Memory :<span> ${phone?.mainFeatures?.memory}</p>
    `

    show_detailes_modal.showModal()
}


const searchHandler = (isShowAll) => {

  loader(true);

    const searchInput = document.getElementById('search-input');

    const searchValue = searchInput.value;

    loadPhone(searchValue, isShowAll);
}



const searchHandler2 = () => {
    const searchInput = document.getElementById('search-input2');


    const searchValue = searchInput.value;

    loadPhone(searchValue);
}


const loader = (isloading) =>{
  const loadingInfo = document.getElementById('loading');

  if(isloading){
    loadingInfo.classList.remove('hidden');
  }else{
    loadingInfo.classList.add('hidden');
  }
}


const showAll = () => {
    searchHandler(true);
}

loadPhone();