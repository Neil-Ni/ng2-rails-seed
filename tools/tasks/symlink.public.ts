import {APP_DEST, PUBLIC_DIR} from '../config';

export = function symlinkPublic(gulp, plugins) {
  let symlink = require('gulp-sym');
  return function () {
    return gulp.src(APP_DEST)
      .pipe(symlink(PUBLIC_DIR), {force: true});
  };
}
