var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(videoz) {
    this.videos = new Videos(videoz);
    this.videos.search('puppies');
    console.log(this.videos.first());
    //this.videos.search('baseball');
    this.render();
    this.VideoPlayerView = new VideoPlayerView({model: this.videos.first()}).render();
    this.VideoListView = new VideoListView({collection: this.videos}).render();
    this.SearchView = new SearchView().render();
    this.videos.on('select', (selectedVideo) => {
      this.VideoPlayerView = new VideoPlayerView({model: selectedVideo}).render();
    });
    this.videos.on('sync', () => {
      this.videos.first().select();
      //this.VideoPlayerView = new VideoPlayerView({model: this.videos.first()}).render();
      this.VideoListView = new VideoListView({collection: this.videos}).render();
    });
    //search button on click should call this.videos.search with the search query
    this.SearchView.$('.btn').on('click', () => {
      this.videos.search(this.SearchView.$('.form-control').val());

    });
    this.SearchView.$('.form-control').on('keypress', (e) => {
      if (e.which === 13) {
        this.SearchView.$('.btn').trigger('click');
      } else {
        //make a new videos object,
        var videoSearch = new Videos();
        videoSearch.search(this.SearchView.$('.form-control').val());
        // (_.debounce(videoSearch.search(this.SearchView.$('.form-control').val())), 500);
        //render a new videoListView with that new object?
        this.VideoListView = new VideoListView({collection: videoSearch}).render();
        videoSearch.on('select', (selectedVideo) => {
          this.VideoPlayerView = new VideoPlayerView({model: selectedVideo}).render();
        });
      }
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

  // searchView:

});
