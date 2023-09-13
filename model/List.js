const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    list:{
        type: String,
        required:true,
    },
});

module.exports = new mongoose.model('list',ListSchema);