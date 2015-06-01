

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
          dev: {
            options: {
              style: 'expanded',
              compass: true
            },
            files: {
              'css/style.css': '<%= project.css %>'
            }
          },
          dist: {
            options: {
              style: 'compressed',
              compass: true
            },
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
            tasks: ['sass:dev']
          }
        }
    });
    
    /**
 * Default task
 * Run `grunt` on the command line
 */
grunt.registerTask('default', [
  'sass:dev',
  'watch'
]);
};