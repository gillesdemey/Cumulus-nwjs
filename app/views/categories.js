'use strict';

App.View.CategoriesView = Backbone.View.extend({

  className: 'categories',
  template: _.template($('#category_template').html()),

  initialize: function (data) {
    this.data = data;
    this.render();
  },

  render: function () {
    var html = this.template(this.data);
    $(this.el).append(html);
  }

});