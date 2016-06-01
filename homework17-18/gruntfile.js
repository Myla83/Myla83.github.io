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
            src: ['css/link/*.css'],
            dest: 'css/dist-css/css.main.css'
          }
        },
        cssmin: {
             dist: {
                 src: ['css/dist-css/css.main.css'],
                 dest: 'css/dist-css/css.min.css'
             }
         }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'cssmin']);

};
