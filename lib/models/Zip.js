const mongoose = require('mongoose');

const zipSchema = new mongoose.Schema();

const Zip = mongoose.model('Zip', zipSchema);

module.exports = Zip;
