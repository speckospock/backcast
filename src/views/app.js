var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(videoz) {
    this.videos = new Videos(videoz);
    this.videos.search('puppies');
    this.render();
    this.VideoPlayerView = new VideoPlayerView({model: this.videos.first()}).render();
    this.VideoListView = new VideoListView({collection: this.videos}).render();
    this.SearchView = new SearchView().render();
    this.videos.on('select', (selectedVideo) => {
      this.VideoPlayerView = new VideoPlayerView({model: selectedVideo}).render();
    });
    this.videos.on('sync', () => {
      this.VideoPlayerView = new VideoPlayerView({model: this.videos.first()}).render();
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

  // searchView:

});
