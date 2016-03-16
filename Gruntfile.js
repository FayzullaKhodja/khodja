module.exports = function(grunt) {
  // Project configuration.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> | Developed by <%= pkg.author %> */\n'
      },
      build: {
        src: ['src/core.js'],
        dest: 'build/khodja.js'
      }
    },

    watch: {

      jsminify: {
        files: 'src/*.js',
        tasks: ['uglify'],
      },

      livereload: {
        options: {livereload: true},
        files: ['src/*.js', '*.html'],
      },
      
    },
  });

  // Load the plugin that provides the "uglify" task.

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};