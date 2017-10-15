$(document).ready(function() {
	
	dpd.places.get(function (result, err) {
  	if(err) return console.log(err);
  		console.log(result);
	});
	
	$('#places-form').submit(function() {
		console.log('here');
	    //var title = $('#name').val();
	    //var imageurl = $('#imageurl').val();

	    //var description = $('#description').val();
	    //var rating = $('#rating').val();

	   	var name = $('#name').val();
	    var imageurl = $('#imageurl').val();
	    var description = $('#description').val();
	    var rating = $('#rating').val();

	    dpd.places.post({name:name,imageurl:imageurl,description:description,rating:rating}, function(result, err) {
	  	if(err) return console.log(err);
  		console.log(result, result.id);
		});
	});

	return false;
});
