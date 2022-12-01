const mongoose = require("mongoose")
const BoxingSchema = mongoose.Schema({
    BoxingStyle: {type:String, minLength: 3},    
    GlovesSize: {type:String},
    BoxingGlovesCost: { type: Number, min: 10, max: 1000 }
})

module.exports = mongoose.model("Boxing",BoxingSchema)