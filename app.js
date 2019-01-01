const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.listen(port);

var cron = require('node-cron');
 
cron.schedule('*/3 * * * *', () => {
  console.log('HI! i am cron, i am running a task every three minutes');
});