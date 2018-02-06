var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var { User, Text } = require('../models/user');

//MAKE SURE TO REPLACE THE USERNAME AND PASSWORD WITH ENVIRONMENT VARIABLES
var tone_analyzer = new ToneAnalyzerV3({
    username: 'b5c877cf-2dd0-4564-b7a9-c14d7c5aac40',
    password: 'N0ZDTNgv668K',
    version_date: '2017-09-21'
});

router.post('/', function(req, res, next) {
    tone_analyzer.tone({ text: req.body.text },
        function(err, tone) {
            if (err)
                console.log(err);
            else
                res.json(tone)
        });
});
//route to send saved text back to page
router.post('/list', function(req, res, next) {
    Text.find({ userId: req.body.user }, function(err, texts) {
        if (err) return console.log(err);
        res.send(texts)
    });
});
//route to pull single wym for user to view again
router.post('/wym', function(req, res, next) {
    Text.find({ _id: req.body.id }, function(err, texts) {
        if (err) return console.log(err);
        res.send(texts)
    });
});

router.post('/save', function(req, res, next) {
    Text.create({
        userId: req.body.user.id,
        title: req.body.title,
        content: req.body.content
    }, function(err, user) {
        if (err) {
            res.send(err.message)
        } else {
            req.flash('success', 'Welcome to your new account! You are logged in.');
        }
    });
})

module.exports = router;