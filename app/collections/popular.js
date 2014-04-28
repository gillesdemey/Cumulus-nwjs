'use strict';

var request = require('request');

App.Collection.Popular = Backbone.Collection.extend({

  model: App.Model.Track,

  initialize: function (tracks) { },

  fetch: function (callback, options) {

    options = options || {
      limit: 12
    };

    // ex. requesting popular music: https://api-v2.soundcloud.com/explore/Popular%2BMusic&limit=10&offset=0
    // ex. requesting popular country music: https://api-v2.soundcloud.com/explore/Country&limit=10&offset=0
    request.get({ url: 'https://api-v2.soundcloud.com/explore/Popular%2BMusic?client_id=' + App.Config.third_party.soundcloud.client_id + '&limit=' + options.limit + '&order=hotness', json: true }, function (err, res, resp) {

      if (err) throw err;

      var tracks = new App.Collection.Popular(resp.tracks);
      if (typeof callback !== 'undefined') callback(tracks);

    });

  }

});