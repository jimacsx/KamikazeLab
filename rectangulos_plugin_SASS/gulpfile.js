var gulp = require('gulp'),
	uglify =  require('gulp-uglify'),	//comprime todo nuestro código javascript
	sass = require('gulp-sass'),			//para compilar sass
	plumber = require('gulp-plumber');	//para que las tareas (task) no dejen de funcionar ante un error


gulp.task('default', ['uglify', 'sass', 'watch']); //corren en paralelo

gulp.task('uglify', function() {
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('min_js'))
});

gulp.task('sass', function() {
	gulp.src('sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['uglify']);
	gulp.watch('sass/**/*.sass', ['sass']);
});