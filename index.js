require('dotenv').config();
const dbConnect = require('./lib/utils/dbConnect');
const Zip = require('./lib/models/Zip');

dbConnect();

Zip.find()
  .then(console.log);
