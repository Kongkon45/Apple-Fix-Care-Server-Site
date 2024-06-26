const mongoose = require("mongoose");

const topSellingProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String, 
        required : true
    }, 
    price : {
        type : Number,
        required : true
    }, 
    image : {
        type : String, 
        required : true
    },
    
})

module.exports = mongoose.model("topSellingProducts", topSellingProductSchema)