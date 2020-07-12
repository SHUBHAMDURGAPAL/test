const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Tweets } = require('../models/tweets');

router.get('/:twitterHandle', (req, res) => {
    if (!ObjectId.isValid(req.params.twitterHandle))
        return res.status(400).send(`No record with given twitter handle : ${req.params.twitterHandle}`);

    Tweets.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Retriving Tweets :' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;