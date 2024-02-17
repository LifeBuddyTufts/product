const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect("mongodb+srv://lifebuddy123:D0W2vjJ4olk3HT08@cluster0.mqglnqo.mongodb.net/lifebuddy?retryWrites=true&w=majority")


const UserSchema = new mongoose.Schema({
    name: String,
    // age: Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err) {
        console.log(err)
    })
})

app.listen(3000, () => {
    console.log("Server is Running")
})