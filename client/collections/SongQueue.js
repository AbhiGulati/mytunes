// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', function(song) {
      this.add(song);
    }, this);

    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.remove(song);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});
