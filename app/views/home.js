'use strict';

App.View.AlbumView = Backbone.View.extend({

  template: _.template($('#album_template').html()),

  initialize: function () {
    this.render();
  },

  render: function () {

    this.collection.on('loaded', this.hideLoader);
    this.$el.html(this.template({ tracks: this.collection.models }));

    $('.sidebar__categories').find('li:first-child').addClass('sidebar__category--active');
  },

  hideLoader: function () {
    $('.app__loading').addClass('app__loading--done');
  }

});