var mongoose = require('mongoose');
var _ = require('underscore'); 

console.log('underscore =', _);
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/test');




var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});


var Movie = mongoose.model('Movie3', movieSchema);


var mo ; 

Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
  console.log('movies  =', movies); 
  mo = movies; 


console.log('// Find all movies that have a credit cookie.', mo);  
});


