var VideoListEntryView = Backbone.View.extend({

  // el: '.video-list';
  initialize: function() {
    
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.video-list-entry-title').on('click', () => {
      this.model.select();
      console.log("Yay, I was (sic) clicked!");
    });

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
