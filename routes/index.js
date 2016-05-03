var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


///this is the route to get the list_page
router.get('/instructorlist', function(req, res, next) {
  res.render('../views/instructor_list_page');
});


//this is the route to post instructors to the database
router.post('/instructorlist', function(req, res, next) {
console.log(req.body.url);

  var name = req.body.name;
  var skills = req.body.skills;
  var location = req.body.location;
  var email = req.body.skills;

  var instructorlist = new Sighting({name:name, skills:skills, location:location, email:email});
  instructorlist.save(function(err){
      if (err) throw err;
        res.json(instructorlist);
    });

});



module.exports = router;
