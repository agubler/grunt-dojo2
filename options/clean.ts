export = function (grunt: IGrunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');

	return {
		typings: {
			src: [ 'typings/' ]
		},
		dist: {
			src: [ 'dist/' ]
		},
		dev: {
			src: [ '<%= devDirectory %>' ]
		},
		src: {
			src: [ '{src,tests}/**/*.js' ],
			filter: function (path: string) {
				// Only clean the .js file if a .js.map file also exists
				var mapPath = path + '.map';
				if (grunt.file.exists(mapPath)) {
					grunt.file.delete(mapPath);
					return true;
				}
				return false;
			}
		},
		coverage: {
			src: [ 'coverage-unmapped.json' ]
		}
	};
};
