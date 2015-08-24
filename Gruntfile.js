module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 9000,
        hostname: "localhost",
        base: "./public"
      },
      livereload: {
            options: {
              open: true
        }
      }
    },
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: "./scss",
          src: "*.scss",
          dest: "./css",
          ext: ".css"
        }]
      }
    },
    watch: {
      scss: {
        cwd: "./scss",
        files: ["*.scss", "**/*.scss"],
        tasks: ["sass:dev", "notify:scss"]
      },
      css: {
        options: {
          cwd: "./css",
          livereload: 1337
        },
        files: ["*.css", "**/*.css"]
      }
    },
    notify: {
      scss: {
        options: {
          title: "SCSS Compiled",
          message: "SCSS Compiled and Completed"
        }
      },
      js: {
        options: {
          title: "JSHint",
          message: "JS files successfully linted"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask("default", [
    "connect:livereload",
    "watch"
  ]);
};