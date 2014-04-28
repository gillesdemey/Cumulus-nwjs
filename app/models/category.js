'use strict';

App.Model.Category = Backbone.Model.extend({

  initialize: function (category) {
    this.title = category;
  }

});