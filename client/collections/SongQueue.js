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

    this.on('ended', function() {
      this.shift();
      if(this.length >= 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      var options = {};
      this.remove(song, options);
      if(options.index === 0) {
        if(this.length >= 1) {
          this.playFirst();
        }
        else {
          this.trigger('stop');
        }
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});
