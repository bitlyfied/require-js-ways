
define('lib/app.productImages',['require','lib/app'],function(require){
	require('lib/app');

	App.productImages = {
		nukeThemAll: function(){
			$('.product .image').hide();
		}
	};
});
define('lib/app.productAwesomiser',['require','lib/app'],function(require){
	require('lib/app');

	App.productAwesomiser = {
		awesome: true
	};
});
define('areas/product',['require','common','lib/app.productImages','lib/app.productAwesomiser'],function(require){
	require('common');
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
require(["areas/product"]);
