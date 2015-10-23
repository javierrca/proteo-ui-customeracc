module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'dist/<%= pkg.name %>-dist.min.js'
      },
    },
	ngtemplates:  {
	  "proteo.ui.customeracc":
	  {
		src:      'src/*.html',
		dest:     'dist/<%= pkg.name %>-dist.js'
	  }
	},
	concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: ['src/*-module.js',
		'src/*-directive.js',
		'src/*-controller.js',
		'src/*-service.js',
		'dist/<%= pkg.name %>-dist.js'],
        dest: 'dist/<%= pkg.name %>-dist.js'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('package', ['ngtemplates','concat','uglify']);



};
