module.exports = function(grunt) {
	"use strict";

	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt, {
		loadGruntTasks: {
			pattern: ['grunt-*']
		},
		init: true,
		config: {
			pkg: grunt.file.readJSON('package.json')
		}
	});
};