const mongoose = require("mongoose");

// our model is a blueprint for individual entries

const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, "{PATH} is required"], // {PATH} injects the key
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters long"] // {MINLENGTH} injects the minlength value
    },
    punchline : {
        type: String,
        required: [true, "{PATH} is required"], // {PATH} injects the key
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters long"] // {MINLENGTH} injects the minlength value
    }
}, {timestamps: true}); // adds createdAt and updatedAt

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;