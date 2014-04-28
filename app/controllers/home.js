'use strict';

App.Controller.Home = function () {

  // collect all json data from soundcloud api
  var Popular = new App.Collection.Popular();
  var Categories = new App.Collection.Categories();

  // fetch categories and build side bar
  Categories.fetch(function (categories) {
    new App.View.CategoriesView({
      el: '.sidebar__categories',
      categories: categories
    });
  });

  // fetch popular tracks and build overview
  Popular.fetch(function (tracks) {
    new App.View.AlbumView({
      el: '.app__main',
      tracks: tracks
    });
  });

};