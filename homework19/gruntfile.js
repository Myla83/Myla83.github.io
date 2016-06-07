module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['js/src/*.js'],
            dest: 'js/dist/script.main.js'
          }
        },
        uglify: {
          dist: {
            src: ['js/dist/script.main.js'],
            dest: 'js/dist/script.min.js'
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ''
          },
          dist: {
            src: ['css/*.css'],
            dest: 'css/dist-css/css.main.css'
          }
        },
        cssmin: {
             dist: {
                 src: ['css/dist-css/css.main.css'],
                 dest: 'css/dist-css/css.min.css'
             }
         },
         sass: {
           dist: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['*.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/*.scss'],
      tasks: ['sass'],
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'cssmin', 'sass', 'watch']);

};
