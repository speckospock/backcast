var VideoListEntryView = Backbone.View.extend({

  // el: '.video-list';

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
