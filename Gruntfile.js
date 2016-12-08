module.exports = function(grunt) {
  var lrPort = 35729;
  var lrSnippet = require('connect-livereload')({
    port: lrPort
  });
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var lrMiddleware = function(connect, options) {
    return [
      lrSnippet,
      serveStatic(options.base[0]),
      serveIndex(options.base[0])
    ];
  };
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 8000,
        hostname: 'localhost',
        base: '.'
      },
      livereload: {
        options: {
          middleware: lrMiddleware
        }
      }
    },
    watch: {
      client: {
        options: {
          livereload: lrPort
        },
        files: ['src/*.html', 'src/css/*.css', 'src/js/*.js']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'src/js',
        src: ['*.js'],
        dest: 'dist/js',
        ext: '.min.js'
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: 'src/css',
        src: ['*.css'],
        dest: 'dist/css',
        ext: '.min.css'
      }
    },
    jshint: {
      files: ['src/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');//js压缩
  grunt.loadNpmTasks('grunt-contrib-cssmin');//css压缩
  grunt.loadNpmTasks('grunt-contrib-jshint');//js校正 相对css校正用csslint

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'connect', 'watch']);
};