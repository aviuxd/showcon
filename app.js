    var express = require('express');
    var app     = express();                // create our app w/ express
	var Glob 	= require('./').Glob		//Package to generate list of files in the folder
	var fs 		= require('fs-extra');
   	var morgan 	= require('morgan');        // log requests to the console (express4)
	var hound 	= require('hound');			//Package to watch folder for change
	var pattern = "./icons/*";				//Path to scan and get list of images

	function CopyIconsFolder(){
		try {
		  fs.copy('./icons', './public/icons')
		  console.log("Icons Folder Copied to Public")
		} catch (err) {
		  console.error(err)
		}
	}

	function RemoveIconsFolder(){
		console.log("start removing folder")
		fs.remove("./public/icons", function(err) {
		    if(err) {
		        return console.log(err)
		    }
		    console.log("folder deleted")
		})	
		setTimeout(CopyIconsFolder, 2500)	 
	}

	function runGlob(){
		var mg = new Glob(pattern, {mark: true}, function (er, matches) {

		  var matchesJSON = JSON.stringify(matches);

			fs.writeFile("./public/icons.json", matchesJSON, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    console.log("The file was saved!");
			});
			console.log("");
			return matches
		})
		RemoveIconsFolder()
	}

	watcher = hound.watch("./icons");

	watcher.on('create', function(file, stats) {
	  	console.log(file + ' was created')
	  	runGlob()
	});
	watcher.on('change', function(file, stats) {
	  	console.log(file + ' was changed')
		runGlob()
	});
	watcher.on('delete', function(file) {
	  	console.log(file + ' was deleted')
	  	runGlob()
	});


    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    runGlob();
    // listen (start app with node server.js) ======================================
    app.listen(35700);
    console.log("App listening on port 35700");