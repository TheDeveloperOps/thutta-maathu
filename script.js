// include api for currency change
const api = "https://api.apilayer.com/exchangerates_data/latest?symbols=USD,AED,ARS,AUD,BGN,BRL,BSD,CAD,CHF,CLP,CNY,COP,CZK,DKK,DOP,EGP,EUR,FJD,GBP,GTQ,HKD,HRK,HUF,IDR,ILS,INR,ISK,JPY,KRW,KZT,MVR,MXN,MYR,NOK,NZD,PAB,PEN,PHP,PKR,PLN,PYG,RON,RUB,SAR,SEK,SGD,THB,TRY,TWD,UAH,UYU,ZAR&base=USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
 
// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
 
// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
 
search.addEventListener('input', updateValue);
 
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
 
// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);
 
// function getresults
function getResults() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "d9pkfnqBf1PcZ2xeu7elSEqzSe9guHWA");
    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
    fetch(`${api}`,requestOptions)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
 
// display results after conversion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
 
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};