module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
		less: {
			development: {
			    options: {
			      paths: ['less']
			    },
			    files: {
			      'public/css/style.css': 'public/less/style.less', // destinataion <- Source
			    }
			}
		},

	    autoprefixer: {
	        single_file: {
	              options: {
	                // Target-specific options go here.
	              },
	              src: 'public/css/style.css',
	              // dest: 'dest/css/style.css'
	        }   
	    },
		watch: {
			files: ['public/less/*.less', 'public/*.html'],
			tasks: ['less', 'autoprefixer'],

			options:{
				livereload: true, 
			},
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-less');
		
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
    		'less'
    ]);
    grunt.registerTask('server', [
    		'watch'
    		]);

};
