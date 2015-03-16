module.exports = function(grunt) {
  grunt.initConfig({
    'jshint': {
      files: ['Gruntfile.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    'tsd': {
      refresh: {
        options: {
          command: 'reinstall',
          latest: true,
          config: 'conf/tsd.json',
          opts: {
            // props from tsd.Options
          }
        }
      }
    },
    'tslint': {
      errors: {
        options: {
          configuration: grunt.file.readJSON('conf/tslint.json')
        },
        files: {
          src: ['src/**/*.ts']
        }
      }
    },
    'typescript': {
       base: {
          src: ['src/**/*.ts'],
          dest: 'app/src',
          options: {
             basePath: 'src',
             sourceMap: true,
             target: 'es5'
          }
       }
    },
    'watch': {
      files: '**/*.ts',
      tasks: ['typescript']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-tsd');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.registerTask('lint', ['jshint', 'tslint']);

  grunt.registerTask('build', ['typescript']);

  grunt.registerTask('default', ['lint', 'build']);
};
