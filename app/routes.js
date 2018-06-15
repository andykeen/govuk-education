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
module.exports = router
