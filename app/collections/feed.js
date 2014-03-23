'use strict';

App.Collection.Feed = Backbone.Collection.extend({

  model: App.Model.Song,

  initialize: function () {

  },

  fetch: function () {

    var collection = this;

    SC.get('/groups/55517/tracks', { limit: 1 }, function (tracks) {

      console.log(tracks);

      collection.set(tracks);
      collection.trigger('loaded');
      return;

    });
  }

});