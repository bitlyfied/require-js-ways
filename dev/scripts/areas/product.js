define(function(require){
	require('lib/app.productImages');
	require('lib/app.productAwesomiser');

	$(function(){
		// do some random stuff
		if(App.productAwesomiser.awesome){
			console.log('Awesome');
		}else{
			App.productImages.nukeThemAll();
		}	
	});
});