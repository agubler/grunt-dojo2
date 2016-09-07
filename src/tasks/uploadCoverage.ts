const sendToCodeCov = require('codecov.io/lib/sendToCodeCov.io');

export = function (grunt: IGrunt) {
	grunt.registerTask('uploadCoverage', <any> function () {
		const done = this.async();
		const contents = grunt.file.read('coverage-final.lcov');
		sendToCodeCov(contents, function (err: Error) {
			done(err);
		});
	});
};
