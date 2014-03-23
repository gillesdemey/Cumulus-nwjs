'use strict';

var Router = Backbone.Router.extend({

  routes: {
    'index.html': App.Controller.Home
  },

});

App.Router = new Router();

Backbone.history.start({
  hashChange: false,
  pushState: true
});