let inputAmount = document.getElementById('amount');
let converButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea')

const currencyRatio = {
    vnd : {
        usd:0.000043,
        krw:0.051,
        eur:0.000039,
        vnd:1
    },
    usd : {
        usd:1,
        krw:1193.27,
        eur:0.90,
        vnd:23235.50
    },
    eur : {
        usd:1.11,
        krw:1325.06,
        eur:1,
        vnd:25802.67
    },
    krw : {
        usd:0.00084,
        krw:1,
        eur:0.00075,
        vnd:19.47
    }
}

function currencyConvert() {
    let from = document.getElementById('fromCurrency').value;
    let to = document.querySelector('input[name=toCurrency]:checked').value;
    let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()];
    let amount = inputAmount.value;
    let result = currency * amount;

    resultArea.innerHTML = `result is ${result}`
}
// async function callApi(currency) {
//     let url = 'https://free.currconv.com/api/v7/convert?q='+from+"_"+to+'compact=ultra&apiKey=31afa7038ba9e6066b94';
//     let result = await fetch(url);
//     let json = await result.json();
//     let ratio = json(from+"_"+to);
//     updateResults(json);
// }

// function updateResults(response) {
//   console.log(response);
// }

//this is how to get value from radio (use with onclick)

// function convert(){
//     let from = document.querySelector('input[name=cur-type]:checked').value;
//     console.log("12",from);
//     if(from === "USD"){
//         convertUsdToVnd();
//     }else if (from === "EUR") {
//         convertEurToVnd();
//     }
// }