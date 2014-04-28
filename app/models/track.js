'use strict';

App.Model.Track = Backbone.Model.extend({

  initialize: function (track) {

    this.title  = track.title;

    if (track.artwork_url !== null)
      this.cover  = track.artwork_url.replace(/-large/, '-t500x500') || '';

    this.author = track.user.full_name || track.user.username;
    this.audio  = track.stream_url + '?client_id=' + App.Config.third_party.soundcloud.client_id;

  },

  rating: function () {

    var plays = this.playback_count;
    var likes = this.favoritings_count;
    var comments = this.comment_count;

    var easynessIndex = 1.5;

    var stars = ((((likes * 4) + (comments * 8)) / plays) * 10);

    stars = Math.round(stars) * easynessIndex;

    if (stars > 5)
      stars = 5;

    return stars;
  }

});