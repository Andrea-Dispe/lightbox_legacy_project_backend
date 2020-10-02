const express = require('express');
const fs = require('fs');
const http = require('http');
const router = require('./router');
// const config = require('./config');
const db = require('./models/index');
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(router);

db.sequelize.sync();

console.log(process.env.DATABASE_URL);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Rumble in the Bronx! ' + err);
  } else {
    console.log(`👽 <(Communications active at port ${process.env.PORT})`);
  }
});
