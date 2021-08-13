const purchasePrice = document.getElementById('input-purchase');
const quantity  =document.getElementById('quantity');
const currentPrice = document.getElementById('input-current');
const searchResult = document.querySelector('#search-results');
const date = document.getElementById("date");
const lastUpdatedDate = document.getElementById("last-updated-date");

// const BASE_URL = "https://www.alphavantage.co/query?";
// const API_KEY  = "&apikey=MAXZSUALDM00MSPN";

const keywordSearch = document.getElementById('search');

currentPrice.addEventListener('click',()=>{
    let purchasePriceValue = purchasePrice.value;
    let quantityValue = quantity.value;
    let currentPriceValue = currentPrice.value;
    purchasePriceValue



})

keywordSearch.addEventListener('keypress',(event)=>{

    if(event.key==='Enter'){
  
    console.log(keywordSearch.value);
    getSearchData(keywordSearch.value);
   
    }
 console.log(date.value);

})



//working on search end point 
function getSearchData(keyword){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
     
      
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=MAXZSUALDM00MSPN`, requestOptions)
        .then(response => response.json())
        .then(result =>{ getUserFriendlyData(result) 
        console.log(result)})
        .catch(error => alert('error', error, "Try again later"));
        if(keyword.includes(',')){
        const keywordArr = keyword.split(',');
        const symbol =keywordArr[1].trim(); // trim removes whitespace 

         getTimeSeriesData(symbol, requestOptions);
        }
}



function getUserFriendlyData(result){
  
if(result["bestMatches"].length!==0){
  

for ( let i =0;i<result["bestMatches"].length;i++){
  const options = document.createElement('option');
//   const atr  = document.createAttribute('value');
//   atr.value= 
  options.setAttribute("value",`${result["bestMatches"][i]["2. name"]}, ${result["bestMatches"][i]["1. symbol"]}`);
  searchResult.appendChild(options);
setTimeout(()=>{
  searchResult.removeChild(options);
},10000)
    

}
}else {
console.log("No Stocks Found. Please Check for any spelling mistakes.") // To be modified 
}

}
// date.addEventListener("click",()=>{ })

function getTimeSeriesData(symbol, method ){
  console.log(typeof(symbol));
  fetch(decodeURIComponent(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=MAXZSUALDM00MSPN`),method)
        .then(response =>{ 
          
        return response.json();
        

      })
        .then((data) =>{
         

          console.log(data);
          dateValue = date.value
          displayStockPriceOnSpecifiedDate(data,dateValue)
        
        })
       
        .catch(error => console.log('error', error));

}



function displayStockPriceOnSpecifiedDate(timeDate, date){
  purchasePrice.value="loading..."; // not working 
  lastUpdatedDate.innerText=timeDate["Meta Data"]["3. Last Refreshed"];
 try{
  purchasePrice.value= timeDate["Time Series (Daily)"][date]["5. adjusted close"]
  // adjusted close price of the stock in specified date 
  currentPrice.value =timeDate["Time Series (Daily)"][timeDate["Meta Data"]["3. Last Refreshed"]]["5. adjusted close"]

  }catch{
    purchasePrice.value="Enter a valid date "
    // currentPrice.value="Enter a valid date"
  }
  
  

}

// you need to manipulate the DOM and add the  stock options to it 
//you still need to do it 
// displaying the  data  in DOM 
//adding click event listener to the data 


//figuring out  how to reset datalist 



//data symbol to price endpoint 
//  spliting the input 
//46

//white space in url 

// solve the getStockPriceOnSpecifiedDate

//input the price to the price value 

//last updated price to be added


//final calculations