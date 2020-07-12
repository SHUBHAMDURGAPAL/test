const mongoose = require('mongoose');

var Tweets = mongoose.model('Tweets', {
    name: { type: String },
    tweets: { type: String },
    records: { type: number }
});

module.exports = { Tweets };