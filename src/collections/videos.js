var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(searchThing) {
    var searchThing = searchThing || 'puppies';
    //that perfoms an initial inquiry to the capital YOUTUBE peepz
    this.search(searchThing);
    console.log(this);
  },

  search: function (query) {
    // SEARCH FUNCTION TO FETCH DATA FROM YOUTUBE'S API
    this.fetch({
      data: {
        q: query,
        part: 'snippet',
        //maxResults: 5,
        key: window.YOUTUBE_API_KEY, // in youtube.js
        //videoEmbeddable: true,
        //type: 'video', // needed to make embeddable only work
      }
    });
    //we need to make this an array
    //we need to select the first of these results
  },

  // url: 'https://www.googleapis.com/youtube/v3/videos'
  url: 'https://www.googleapis.com/youtube/v3/search',

  parse: function (data) {
    return data.items;
  }


});
