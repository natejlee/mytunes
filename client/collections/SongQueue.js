// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.listenTo(this, 'add', function(song){
      if(this.length === 1){
      this.playFirst();
    }

    });


    this.listenTo(this, 'dequeue', function(song){

      if(this.at(0) === song){
        this.playNext();
      }else{
        this.remove(song)
      }

    });


    this.listenTo(this, 'ended', function(song){
      this.shift();
      if(this.length >= 1){
        this.playFirst();

      } else {
        this.trigger('stop');
      }


    })

  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },





  playFirst: function(){
    this.at(0).play();
  }

});
