var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //this.render();
    //when the video collection updates, it should re-render
    this.collection.on('sync', () => { this.render(); });
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each((video) => {
      var thisVideo = new VideoListEntryView({model: video});
      this.$el.children().append(thisVideo.render().$el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
