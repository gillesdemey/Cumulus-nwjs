'use strict';

var request = require('request');

App.Collection.Categories = Backbone.Collection.extend({

  model: App.Model.Category,

  initialize: function () {

  },

  fetch: function (callback) {

    var collection = this;

    localforage.getItem('cumulus.categories').then(function (categories) {

      if (typeof callback !== 'undefined' && categories !== null) {
        categories = new App.Collection.Categories(categories);
        callback(categories);
        return;
      }

      // requesting SoundCloud categories: http://api.soundcloud.com/explore/v2 -> categories.music
      request.get({ url: 'http://api.soundcloud.com/explore/v2?client_id=' + App.Config.third_party.soundcloud.client_id, json: true }, function (err, res, resp) {

        if (err) throw err;

        var categories = normalizeCategories(resp.categories.music);
        localforage.setItem('cumulus.categories', categories);

        categories = new App.Collection.Categories(categories);
        collection.set(categories);

        if (typeof callback !== 'undefined') callback(categories);

      });


    });

    function normalizeCategories(categories) {
      return _.map(categories, function (cat) {
        return decodeURIComponent(cat).replace(/\+/g, ' ');
      });
    }

  }

});