define(function(require){
	require('lib/app');
	require('lib/app.greeter');

	App.carousel = {
		helloMe: function(){
			App.greeter.greet('carousel');
		}
	};
});