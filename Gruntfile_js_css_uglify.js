module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  grunt.loadNpmTasks('grunt-contrib-uglify');//js压缩
  grunt.loadNpmTasks('grunt-contrib-cssmin');//css压缩
  grunt.loadNpmTasks('grunt-contrib-jshint');//js校正 相对css校正用csslint

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};