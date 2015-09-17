gulp = require "gulp"
$ = do require "gulp-load-plugins"
del = require "del"
runSequence = require "run-sequence"

gulp.task "coffee", ->
  gulp.src "./src/main.coffee"
      .pipe $.coffee {bare:false}
      .on "error", $.util.log
      .pipe gulp.dest "./dist/"

gulp.task "mocha", ->
  require "espower-coffee/guess"
  return gulp.src "test/**/*.coffee"
             .pipe $.mocha()
             .on "error", -> @emit "end"

gulp.task "watch", ->
  gulp.watch ["./src/**/*.coffee", "./test/**/*Spec.coffee"], ["mocha"]

gulp.task "clean", del.bind null, ["dist"]

gulp.task "build", (callback) ->
  runSequence "clean", ["coffee"], callback
