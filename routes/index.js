var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var request = require('request');
var Twitter = require('twitter');
const TWITTER_CONSUMER_KEY = '0Dqvt2smAU9Hjk2oTQRMSQ8bl'
const TWITTER_CONSUMER_SECRET = '8YRoU3cFmGpFAmShInQ0AD6yzsGCk7DBwyR5uD7VORqGS7rvw2'
const ENC_SECRET = new Buffer(TWITTER_CONSUMER_KEY + ':' + TWITTER_CONSUMER_SECRET).toString('base64')

var oauthOptions = {
  url: 'https://api.twitter.com/oauth2/token',
  headers: {'Authorization': 'Basic ' + ENC_SECRET, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  body: 'grant_type=client_credentials'
};

request.post(oauthOptions, function(e, r, body) {
  console.log(body)
});

//Twitter Hook Up
// var twitter = new Twitter({
// 	consumer_key: process.env.TWITTER_CONSUMER_KEY,
// 	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
// 	bearer_token: 
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Nothing at the root route yet...');
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.send('You are logged in and this is your profile.');
});

module.exports = router;
