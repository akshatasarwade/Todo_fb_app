const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akshatasarwade15:aks%40123@cluster1.rpqwa.mongodb.net/users_details")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("users_details", todoSchema);

module.exports = {
    todo
}