/*
    file: gulpfile.js
    - - - - - - - - - - - - - - - - 
    Run
    * `gulp` to lint, minify and start server
    * `gulp ocean` to ready app for hosting
 */

var gulp = require('gulp')
  , browserSync = require('browser-sync').create()
  , del = require('del');

var jshint = require('gulp-jshint')
  , csslint = require('gulp-csslint')
  , changed = require('gulp-changed')
  , minifyImage = require('gulp-imagemin')
  , minifyHTML = require('gulp-minify-html')
  , stripDebug = require('gulp-strip-debug')
  , uglify = require('gulp-uglify')
  , autoPrefixer = require('gulp-autoprefixer')
  , minifyCSS = require('gulp-minify-css')
  , nodemon = require('gulp-nodemon')
  , rename = require('gulp-rename')
  , replace = require('gulp-replace')
  , concat = require('gulp-concat')
  , cache = require('gulp-cache')
  , livereload = require('gulp-livereload');

var paths = {
    scripts: ['./client/app/**/*.js', './client/assets/js/**/*.js']
  , html: './client/app/**/*.html'
  , index: './client/*.html'
  , img: './client/assets/img/**/*'
  , css: ['./client/app/**/*.css', './client/assets/css/**/*.css']
  , scriptsDist: './client/dist/js/'
  , htmlDist: './client/dist/html/'
  , indexDist: './client/dist/'
  , imgDist: './client/dist/img/'
  , cssDist: './client/dist/css/'
  , server: './server/server.js'
  , serverDist: './server/'
};

/*
    Perform linting on all client/server-side .js files
    and log errors to the console
 */
gulp.task('lintJS', function() {
  gulp.src(paths.scripts)
      .pipe(jshint({laxcomma: true}))
      .pipe(jshint.reporter('jshint-stylish'));
});

/*
    Perform linting on all .css files
    and log errors to the console
 */
gulp.task('lintCSS', function() {
  gulp.src(paths.css)
      .pipe(csslint())
      .pipe(csslint.reporter());
});

/*
    Minify any changed images
 */
gulp.task('cleanImg', function() {
  gulp.src(paths.img)
      .pipe(cache(minifyImage({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(rename(function(path) {
        path.basename += '.min';
      }))
      .pipe(gulp.dest(paths.imgDist))
      .pipe(browserSync.stream());
      
});

/*
    Minify any changed HTML files
 */
gulp.task('cleanHTML', function() {
  gulp.src(paths.html)
      .pipe(changed(paths.htmlDist))
      .pipe(minifyHTML())
      .pipe(rename(function(path) {
          path.basename += '.min';
      }))
      .pipe(gulp.dest(paths.htmlDist))
      .pipe(browserSync.stream());
  del(paths.indexDist + 'index.html');
  gulp.src(paths.index)
      .pipe(changed(paths.indexDist))
      .pipe(minifyHTML())
      .pipe(gulp.dest(paths.indexDist))
      .pipe(browserSync.stream());
});

/*
    Concatenate, strip logs/debug statements
    and minify Javascript files
 */
gulp.task('cleanJS', function() {
  del(paths.scriptsDist);
  gulp.src(paths.scripts)
      /*.pipe(stripDebug())*/
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(rename(function(path) {
          path.basename += '.min';
      }))
      .pipe(gulp.dest(paths.scriptsDist))
      .pipe(browserSync.stream());
});

/*
    Concatenate, ensure cross-brower support
    and minify CSS
 */
gulp.task('cleanCSS', function() {
  del(paths.cssDist);
  gulp.src(paths.css)
      .pipe(autoPrefixer('last 2 versions'))
      .pipe(minifyCSS())
      .pipe(rename(function(path) {
          path.basename += '.min';
      }))
      .pipe(gulp.dest(paths.cssDist))
      .pipe(browserSync.stream());
});

/*
    Replace references to localhost
    with website url
 */
gulp.task('replace', function() {
  gulp.src([paths.server])
      .pipe(replace('8000', '80'))
      .pipe(replace('localhost', '159.203.253.76'))
      .pipe(rename(function(path) {
          path.basename += '.production';
      }))
      .pipe(gulp.dest(paths.serverDist));
});

/*
    Start nodemon instance for server.js
 */
gulp.task('serve', function() {
  nodemon({
      script: './server/server.js'
    , ignore: './node_modules/**/*.js'
  })
  .on('restart', function() {
    console.log('Server restarted!');
  });
});

/*
    Kick-off BrowserSync dependent on all
    prior tasks executing
 */
gulp.task('start', ['serve', 'lintJS', 'lintCSS', 'cleanImg', 'cleanHTML', 'cleanJS', 'cleanCSS'], function() {

    browserSync.init({
      port: 3001
    , notify: true
    , injectChanges: true
    //, files: paths.scriptsDist.concat([paths.htmlDist, paths.cssDist, paths.imgDist])
    //, files: paths.scripts.concat([paths.libs, paths.html, paths.css, paths.img])
    , proxy: 'localhost:8000'
    //, socket: { domain: 'localhost:8000' }
  });

    gulp.watch([paths.html, paths.index], ['cleanHTML', browserSync.reload]);

    gulp.watch(paths.css, ['lintCSS', 'cleanCSS', browserSync.reload]);

    gulp.watch(paths.scripts.concat([paths.libs]), ['lintJS', 'cleanJS', browserSync.reload]);

    gulp.watch(paths.img, ['cleanImg', browserSync.reload]);
});

gulp.task('default', ['start']);

gulp.task('production', ['lintJS', 'lintCSS', 'cleanImg', 'cleanHTML', 'cleanJS', 'cleanCSS']);

gulp.task('ocean', ['production', 'replace']);
