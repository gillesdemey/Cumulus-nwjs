'use strict';

App.Controller.Home = function () {

  console.log('[Home Controller]: Welcome home!');

  if (!App.Page.Home) {
    App.Page.Home = new App.View.Page({ 'id': 'home' });
  }

  // collect all json data from soundcloud api
  // var Feed = new App.Collection.Feed();

  // Feed.fetch();

};