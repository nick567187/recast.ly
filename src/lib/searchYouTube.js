var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      type: 'video',
      videoEmbeddable: 'true', 
      part: 'snippet', 
      key: options.key,
      q: options.query,
      maxResults: options.max,
    },
    contentType: 'json',
    success: function (data) {
      callback(data.items);
      console.log('success!', data.items);
    },
    error: function (data) {
      console.error('Failed to recieve message', data);
    }
  });
};
    


window.searchYouTube = searchYouTube;
