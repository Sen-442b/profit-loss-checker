const purchasePrice = document.getElementById('input-purchase');
const quantity  =document.getElementById('quantity');
const currentPrice = document.getElementById('input-current');
const searchResult = document.querySelector('.search-results')
// const BASE_URL = "https://www.alphavantage.co/query?";
// const API_KEY  = "&apikey=MAXZSUALDM00MSPN";
// const symbo
const keywordSearch = document.getElementById('search');

// MAXZSUALDM00MSPN
currentPrice.addEventListener('click',()=>{
    let purchasePriceValue = purchasePrice.value;
    let quantityValue = quantity.value;
    let currentPriceValue = currentPrice.value;
    purchasePriceValue



})


keywordSearch.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
    console.log(keywordSearch.value)
    getSearchData(keywordSearch.value);
    }
 

})


fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=MAXZSUALDM00MSPN')
.then((result)=>result.json())
.then((data)=>console.log(data));
// .then(data=>console.log(data));
console.log("Sdsd");

//working on search end point 
function getSearchData(keyword){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      var abc = "aap"
      
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=MAXZSUALDM00MSPN`, requestOptions)
        .then(response => response.json())
        .then(result =>{ getUserFriendlyData(result) 
        console.log(result)})
        .catch(error => console.log('error', error));

}



function getUserFriendlyData(result){
    const textContent =  document.createElement('p')
for ( let i =0;i<result["bestMatches"].length;i++){
  
   textContent.innerHTML = `${result["bestMatches"][i]["2. name"]}`
   searchResult.appendChild(textContent)
}
}

// you need to manipulate the DOM and add the  stock options to it 
//you still need to do it 
// displaying the  data  in DOM 
//adding click event listener to the data 