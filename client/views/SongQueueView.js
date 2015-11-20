// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',


  initialize: function(song) {
    // this.model = song;
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

   return this.$el.html('<th>Song Queueueueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );


    // return this.$el;
  }

});
