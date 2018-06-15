var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/juggling-balls-answer', function (req, res) {
  // make a variable to store the data
  var jugglingBalls = req.session.data['juggling-balls']

  // check whether the variable matches a condition
  if (jugglingBalls == "3 or more") {
    // send user to next page
    res.redirect('/juggling-trick')
  } else {
    // send user to ineligible page
    res.redirect('/ineligible')
  }
})

router.post('/juggling-objects-answer', function (req, res) {
  // make variables to store the data
  var jugglingObjectBalls = req.session.data['balls']
  var jugglingObjectSkittles = req.session.data['skittles']
  var jugglingObjectTorches = req.session.data['torches']

  // check whether the variables matches condition
  if ((jugglingObjectBalls == "Balls") && (jugglingObjectSkittles == "Skittles") && (jugglingObjectTorches == "Flaming torches")) {
    // send user to next page
    res.redirect('/advanced')
  } else {
    // send user to check your answers page
    res.redirect('/check-your-answers-page')
  }
})

module.exports = router
