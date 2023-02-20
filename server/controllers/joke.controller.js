const Joke = require('../models/joke.model');

module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => {
        return res.json(newJoke);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getAll = (req, res) => {
    Joke.find({})
    .then(allJokes => {
        return res.json(allJokes);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getOne = (req, res) => {
    Joke.findById({_id: req.params.id})
    .then(joke => {
        return res.json(joke);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.delete = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke => {
        return res.json(deletedJoke);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.update = (req, res) => {
    Joke.updateOne({_id: req.params.id}, req.body, {runValidators: true})
    .then(updatedJoke => {
        return res.json(updatedJoke);
    }).catch(err => {
        return res.json(err);
    })
}