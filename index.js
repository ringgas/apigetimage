
let giphy = [];

//  Asynchronous
const getGiphy = async() => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?q=spiderman&api_key=kmfFihGj30MnQ2OCSViNtaYLvem1fw5W&limit=9')
  const data = await response.json();
  giphy = data.data;
  await viewData();
  console.log(data)
}

getGiphy();

// Add image giphy
// Title
// 3 row => 3 column/giphy




const viewData = () => {
  let result = '';
  giphy.map(element => {
    console.log(element.title);
    result += `  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img src="${element.images.original.url}" a width="300" height="300">
    
      <div class="card-body">
        <p class="card-text">${element.title}</p>
        <div class="d-flex justify-content-between align-items-center">
         
        </div>
      </div>
    </div>
  </div>`
  })
  document.getElementById('giphy').innerHTML = result;
}

 alert('Tampilin data yang cepat')