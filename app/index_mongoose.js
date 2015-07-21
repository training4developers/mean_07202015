var
	mongoose = require('mongoose'),
	util = require("util");

mongoose.connect('mongodb://localhost/mean');
var Car = mongoose.model('Car', {
	make: String,
	model: String,
	year: String
});

/*

var car = new Car({
	make: 'Ford',
	model: "Fusion",
	year: 2015
});

car.save(function (err) {
  if (err) {
		console.log(util.inspect(err));
	}

  console.log('car saved...');
});
*/

Car.find({
	make: "Ford"
}, function(err, data) {

	if (err) {
		console.log(util.inspect(err));
	}

	console.dir(data[0].make);
	mongoose.connection.close();

});
