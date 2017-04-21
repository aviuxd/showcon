var Icon = require('./examples/svg.json');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all icons
	app.get('/api/icons', function(req, res) {

		// use mongoose to get all icons in the database
		Icon.find(function(err, icons) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(icons); // return all icons in JSON format
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};