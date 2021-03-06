'use strict';

(function debug() {

  if (!App.isDebug) return;

  App.window.showDevTools(); // show devTools by default

  var Gaze = require('gaze').Gaze;
  var gaze = new Gaze('**/*');

  gaze.on('all', function (event, filepath) {
    if (location)
      _.debounce(location.reload(), 2000, true);
  });

  gaze.on('error', function (err) {
    throw err;
  });

})();
