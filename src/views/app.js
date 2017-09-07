var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.VideoPlayerView = new VideoPlayerView().render();
    this.VideoListView = new VideoListView({collection: this.videos}).render();
    // this.VideoListView.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
