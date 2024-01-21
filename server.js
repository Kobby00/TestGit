const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
// Middleware to parse JSON bodies
app.use(bodyParser.json());

const cors = require("cors")
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

const REDDE_API_KEY= "J3bTbE28yRQvCFwFqB8C5km93MHMZP3QeDuHMpCERzWFUmqDZW"
const REDDE_APP_ID  = "1536"



 app.get("/", (req,res)=>{
    res.json({
        name: "Kobby",
        response: "pass"
    })
}) 
app.post('/checkout', async (req, res) => {
    try {
      // Extract relevant data from the request
      const { amount,  nickname, reason,  clienttransid, paymentoption, walletnumber} = req.body;
  
      // Make a request to Redde API using backend credentials
      const response = await fetch('https://api.reddeonline.com/v1/receive/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': REDDE_API_KEY,
        },
        body: JSON.stringify({
          amount,
          appid: REDDE_APP_ID,
          nickname,
          clienttransid,
          reason,
          paymentoption,
          walletnumber,
        }),
      });
  
      // Parse and send the Redde API response to the frontend
      const responseData = await response.json();
      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
    

app.get("/failure" ,(req,res)=>{
    res.json("failure")
})
app.get("/success" ,(req,res)=>{
    res.json("success")
})
app.get("/logo" ,(req,res)=>{
    res.json()
})

app.listen(4000)