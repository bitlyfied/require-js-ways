define(function(require){
	require('scripts/lib/app.js');
	require('scripts/lib/app.greeter.js');

	App.carousel = {
		helloMe: function(){
			App.greeter.greet('carousel');
		}
	};
});