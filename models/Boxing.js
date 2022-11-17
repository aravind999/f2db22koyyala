const mongoose = require("mongoose")
const BoxingSchema = mongoose.Schema({
    BoxingStyle: String,
    GlovesSize: String,
    BoxingGlovesCost: Number
})
module.exports = mongoose.model("Boxing",
BoxingSchema)