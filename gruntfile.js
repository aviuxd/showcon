module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
        	css_files:{
        		expand: 	true, 
        		flatten: 	true,
        		src: 		['bower_components/bootstrap/dist/css/bootstrap.min.css'],
        		dest: 		'public/css/'
        	},
        	js_files: {
        		expand: true, 
        		flatten: true,
        		src: 	['bower_components/jquery/dist/jquery.min.js'],
        		dest:	'public/js/'
        	}
        },

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
			tasks: ['less', 'autoprefixer', 'copy'],

			options:{
				livereload: true, 
			},
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
		
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
    		'less',
    		'copy'
    ]);
    grunt.registerTask('server', [
    		'less', 
    		'autoprefixer', 
    		'copy',
    		'watch'
    		]);

};
