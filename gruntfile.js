module.exports = function(grunt) {
  grunt.initConfig({
    project: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "resources/css/my.css": "resources/css/less/my.less"
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! vegaasen.com-js-<%= project.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'resources/js/my.js',
        dest: 'resources/js/my.min.js'
      }
    },
    watch: {
      styles: {
        files: ['resources/css/less/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['resources/js/*.js'],
        tasks: ['uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify', 'less', 'watch']);
};
