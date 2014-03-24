'use strict';

App.Controller.Connect = function () {

  console.log('[Connect Controller]: Connecting to SoundCloud');

  SC.connect(function () {
    SC.get('me/activities.json', function (tracks, err) {
      if (err) throw err;
      console.log(tracks);
    });
  });


};