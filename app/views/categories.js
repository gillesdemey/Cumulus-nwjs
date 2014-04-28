'use strict';

App.View.CategoriesView = Backbone.View.extend({

  template: _.template($('#category_template').html()),

  initialize: function (data) {
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ categories: this.collection.models }));
  }

});