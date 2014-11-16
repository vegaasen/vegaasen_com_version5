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
        banner: '/*! vegaasen.com-js-<%= project.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: {
          dead_code: true
        }
      },
      my_target: {
        files: {
          'resources/js/my.min.js': [
            'resources/js/original/my.js',
            'resources/js/original/gmaps.js'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.main.html'
        }
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
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['uglify', 'less', 'htmlmin', 'watch']);
};
