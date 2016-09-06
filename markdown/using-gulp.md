This is how I use the `gulp` module with Node.js.

# Static page

```javascript
/**
 * Step 1:  Set the path where files should be built
 * 			(i.e. concatenated and copied).
 */
var developer = './dev';
var production = './dist';

/**
 * Step 2:  Source files used to build the site.
 */
var source = {
	template: ['./src/template/**/*.html'],
	html: ['./src/html/**/*.html'],

	// A list of CSS sources in order
	css: ['./src/css/**/*.css'],

	// A list of JS sources in order
	js: ['./src/lib/**/*.js', './src/js/**/*.js']
};

var gulp = require('gulp'),

    // Essential gulp plugins
    concat = require('gulp-concat'),
    merge = require('merge-stream'),

    uglifyJS = require('gulp-uglify'),
    uglifyCSS = require('gulp-uglify-css');
```

# CSS Tasks

The CSS task usually just concatenates and uglifies the CSS files into a single `style.css` file.

```javascript
gulp.task('css', function() {
	return gulp.src(source.css)
		.pipe(concat('style.css'))
		.pipe(gulp.dest(developer))
		.pipe(uglifycss())
		.pipe(gulp.dest(production));
});
```

# Nunjucks rendering

```javascript
var render = require('gulp-nunjucks-render');

gulp.task('render', function() {
  return merge(
    // ... render tasks ...
  );
});
```

# Basic HTML

```javascript
gulp.task('html', function() {
	return gulp.src(source.html)
		.pipe(gulp.dest(developer))
		.pipe(gulp.dest(production))
});
```

```
