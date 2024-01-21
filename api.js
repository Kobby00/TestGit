//const API_KEY= "J3bTbE28yRQvCFwFqB8C5km93MHMZP3QeDuHMpCERzWFUmqDZW"
//const APP_ID = "1536"

// const asfunc = async() =>{
//     try{
//     const response = await fetch("http://localhost:4000/",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json;charset=UTF-8"
//         },
//         Payload: JSON.stringify(
//             {
//                 "amount": 10,
//                 "apikey": API_KEY,
//                 "appid": APP_ID,
//                 "description": "Buying something from Merchant Name Limited",
//                 "failurecallback": "http://localhost:4000/failure",
//                 "logolink": "http://localhost:4000/logo",
//                 "merchantname": "Merchant Name Limited",
//                 "clienttransid": "102474",
//                 "successcallback": "http://localhost:4000/success"
//                 }
//         )
            
//     })
//     if (!response.ok) throw Error("Failed")
//     const data = await response.json()
//     console.log("success")
//     } catch (error){
//         console.log(error)
//     }
// }

// asfunc()

// console.log("success")


// async function initiateCheckout() {
//     const amount = document.getElementById('amount').value;
//     const paymentoption = document.getElementById('paymentoption').value;
//     const nickname = document.getElementById('nickname').value;
//     const walletnumber = document.getElementById('walletnumber').value;
//     const clienttransid = document.getElementById('clienttransid').value;
//     const reason = document.getElementById('reason').value;

//     try {
//       const response = await fetch('http://localhost:4000/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount, paymentoption, nickname,clienttransid, reason, walletnumber }),
//       });

//       const responseData = await response.json();
//       console.log(responseData)
//       if (responseData.status === 'OK' && responseData.checkouturl) {
//         console.log(responseData);
//         window.location.href = responseData.checkouturl;
        
//       } else {
//         console.error(responseData);
//      }
//     } catch (error) {
//       alert('An error occurred. Please check the console for details.');
//       console.error(error);
//     }
//   }

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports',
  params: {all: 'true'},
  headers: {
    'X-RapidAPI-Key': 'e0d6bdddf4msh7aa571bddc2eba1p10746cjsn35cffb1cdf2d',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}