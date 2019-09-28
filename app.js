const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
app.listen(port);
const axios = require('axios');
var cron = require('node-cron');
 
cron.schedule('*/10 * * * * *', () => {
  axios.get('http://localhost:3000/v1/sina').then(data => {
    console.log(true)
  }).catch(err => {
    // console.log(err)
  })
  console.log('HI! i am cron, i am running a task every 5 detik');
});