var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    // this.render();
    // this.model.on('select', () => {
    //   // console.log("I was (sic) changed!");
    //   this.render();
    // });
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.collection.first().attributes);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
