var colors = require('colors'); 
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/test');




var movieSchema = new mongoose.Schema({
  title: String
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});



// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);




var thor = new Movie({
  title: 'Thor'
, rating: 'PG-14'
, releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
, hasCreditCookie: true
});



thor.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});

console.log(' every 6 secodns '.green);



// // Find a single movie by name.
// Movie.findOne({ title: 'Thor' }, function(err, thor) {
//   if (err) return console.error(err);
//   console.dir(thor);
// });

// // Find all movies.
// Movie.find(function(err, movies) {
//   if (err) return console.error(err);
//   console.dir(movies);
// });

console.log('// Find all movies that have a credit cookie.');
Movie.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  // console.dir(movies);
  console.log(' movies = ', movies);
  console.log('------------ '.red);

});

console.log('----------- outside - '.red);







