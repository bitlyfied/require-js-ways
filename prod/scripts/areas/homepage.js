
define('lib/app.greeter',['require','lib/app'],function(require){
	require('lib/app');

	App.greeter = {
		greet: function(greetee){
			console.log('Hello ' + greetee + '!');
		}
	};
});
define('lib/app.carousel',['require','lib/app','lib/app.greeter'],function(require){
	require('lib/app');
	require('lib/app.greeter');

	App.carousel = {
		helloMe: function(){
			App.greeter.greet('carousel');
		}
	};
});
define('areas/homepage',['require','lib/app.carousel'],function(require){
	require('lib/app.carousel');

	$(function(){
		App.carousel.helloMe();	
	});
});
require(["areas/homepage"]);
