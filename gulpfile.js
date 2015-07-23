var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('server', function () {
	browserSync({
		port: 9001,
		server: {
			baseDir: 'web/'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'web/*.html',
		'web/assets/js/*.js',
		'web/assets/css/*.css']).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);