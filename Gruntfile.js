

/*!
 * Cribbb Gruntfile
 * http://cribbb.com
 * @author Philip Brown
 */

'use strict';

/**
 * Grunt Module
 */
module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
     /**
     * Configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * Set project object
         */
        project: {
          css: [
            'sass/sassInit.scss'
          ],
        },
        /**
         * Sass
         */
        sass: {
            options: {
              style: 'expanded',
              compass: true,
              sourceMap: false
            },
            dist: {
              files: {
                'css/style.css': '<%= project.css %>'
              }
            }
        },
        /**
         * Watch
         */
        watch: {
          sass: {
            files: 'sass/*/*.{scss,sass}',
            tasks: ['sass']
          }
        },
        copy: {
            materialize: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/Materialize/dist/js/',
                        src: ['materialize.min.js'],
                        dest: 'js/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/Materialize/sass/',
                        src: ['components/*', 'materialize.scss'],
                        dest: 'sass/materialize/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/Materialize/sass/components/date_picker/',
                        src: ['*'],
                        dest: 'sass/materialize/components/date_picker/'
                    }
                ]
            },
          jquery: {
              files: [
                  {
                      expand: true,
                      cwd: 'bower_components/jquery/dist/',
                      src: ['jquery.min.js'],
                      dest: 'js/'
                  }
              ]
          },
          imagesLoaded: {
              files: [
                  {
                      expand: true,
                      cwd: 'bower_components/imagesLoaded',
                      src: ['imagesloaded.pkgd.min.js'],
                      dest: 'js/'
                  }
              ]
          },
          colorthief: {
              files: [
                  {
                      expand: true,
                      cwd: 'bower_components/color-thief/dist',
                      src: ['color-thief.min.js'],
                      dest: 'js/'
                  }
              ]
          },
          masonry: {
              files: [
                  {
                      expand: true,
                      cwd: 'bower_components/masonry/dist/',
                      src: ['masonry.pkgd.min.js'],
                      dest: 'js/'
                  }
              ]
          },
          bootstrap: {
            files: [
                {
                    expand: true,
                    cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                    src: ['bootstrap/*', '!bootstrap/_bootstrap.scss'],
                    dest: 'sass/bootstrap/'
                },
                {
                    expand: true,
                    cwd: 'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/mixins/',
                    src: ['*'],
                    dest: 'sass/bootstrap/bootstrap/mixins/'
                }
            ]
          }
        }
    });
    /**
 * Default task
 * Run `grunt` on the command line
 */
grunt.registerTask('default', [
  'sass',
  'watch'
  ]);
};
