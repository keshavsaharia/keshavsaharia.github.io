Gulp makes it easy to define pipeline for files.

This is how I use the `gulp` module with Node.js. 

# Setup paths

For the examples below, I'm using a header which describes all source paths and build destinations.

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
    rename = require('gulp-rename'),
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

# Basic HTML

```javascript
gulp.task('html', function() {
	return gulp.src(source.html)
		.pipe(gulp.dest(developer))
		.pipe(gulp.dest(production))
});
```

# Nunjucks

Nunjucks is an open-source templating engine built by Mozilla. The [documentation](https://mozilla.github.io/nunjucks/) describes the templating system in depth. Gulp has a plugin for adding nunjucks to your pipeline.

```javascript
source.template = ['./src/template/'];
source.data = ['./src/data/config.json'];

// Configure nunjucks
var render = require('gulp-nunjucks-render');
render.nunjucks.configure(source.template, { watch: true });

/**
 * HTML task for generating static pages.
 */
gulp.task('html', function() {
	var task = gulp.src(source.html);

	if (Array.isArray(source.data))
		source.data.forEach(function(dataSource) {
			task = task.pipe(insert(require(dataSource)));
		});

	return task
		.pipe(render())
		.pipe(gulp.dest(developer))
		.pipe(gulp.dest(production))
});

```


