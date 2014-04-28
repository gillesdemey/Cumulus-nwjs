'use strict';

App.View.AlbumView = Backbone.View.extend({

  template: _.template($('#album_template').html()),

  initialize: function (data) {
    this.data = data;
    this.render();
  },

  render: function () {
    var html = this.template(this.data);
    $(this.el).append(html);
    $('.sidebar__categories').find('li:first-child').addClass('sidebar__category--active');
  },

  hideLoader: function () {
    $('.app__loading').hide();
  }

});