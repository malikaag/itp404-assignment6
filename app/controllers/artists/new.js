import Ember from 'ember';

export default Ember.Controller.extend({
	 actions: {
    createArtist: function(e) {
      e.preventDefault();
      var name = this.get('artistName');
   

      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
         	name: name
        }
      });

      promise.then((response) => {
        this.set('artistName', null);
        
        var artists = this.get('model.artists');
      
        var newArtists = artists.concat(response.artists);
        this.set('model.artists', newArtists);
        console.log('success');
      }, function() {
        alert('error');
        console.log('error');
      });
    }
  }
});
