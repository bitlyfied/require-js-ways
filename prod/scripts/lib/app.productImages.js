define(function(require){
	require('lib/app');

	App.productImages = {
		nukeThemAll: function(){
			$('.product .image').hide();
		}
	};
});