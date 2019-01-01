const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.listen(port);

var cron = require('node-cron');
 
cron.schedule('*/1 * * * * *', () => {
  console.log('running a task every one sec');
});