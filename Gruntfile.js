module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-handlebars-layouts");
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    //check error in js files
      files: ['Gruntfile.js', 'javascript/scripts/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    concat: {
    //concat js files
      options: {
        separator: '\n/**********/\n'
      },

      basic: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'javascript/scripts/nextSection.js'],
        dest: 'javascript/common.js',
      },

      map: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'javascript/scripts/search.js'],
        dest: 'javascript/concat-map.js',
      },
    },
    uglify: {
    //minify js files
      dist: {
        files: {
          'javascript/app.min.js': ['javascript/app.js']
        }
      }
    },
    handlebarslayouts: {
      home: {
        files: {
          //'dist/home.html': 'src/home.html'
          'dist/*.html': 'templates/*.hsb',
        },
        options: {
          partials: ['templates/partials/*.hbs', 'templates/partials/*.md', 'templates/layout.html'],
          context: {
            title: 'Abortire In Italia',
            projectName: 'Abortire in italia Project',
          }
        }
      }
    },
    watch: {
      files: ['javascript/scripts/*.js'],
      tasks: ['jshint', 'handlebarslayouts']
    }
  });

  grunt.registerTask('dev', ['jshint', 'handlebarslayouts', 'concat', 'watch']);
  grunt.registerTask('prod', ['jshint', 'handlebarslayouts', 'concat', 'uglify']);

};