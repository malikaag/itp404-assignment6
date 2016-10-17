import Ember from 'ember';

export default Ember.Route.extend({

	 model: function(params) {
    var url = 'http://itp-api.herokuapp.com/api/artists/';

    var promise = $.ajax({
      type: 'get',
      url: url
    }).then(function(response) {
      return {
        name: response.artists[0].name
      };
    });

    return promise;
  }
});
