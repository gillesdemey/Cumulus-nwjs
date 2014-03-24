'use strict';

var Router = Backbone.Router.extend({

  routes: {
    'index.html' : App.Controller.Home,
    'home(/:action)' : App.Controller.Home,
    'connect' : App.Controller.Connect
  },

});

App.Router = new Router({
  pushState: true
});

Backbone.history.start();