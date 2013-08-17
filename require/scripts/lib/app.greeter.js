define(function(require){
	require('scripts/lib/app.js');

	App.greeter = {
		greet: function(greetee){
			console.log('Hello ' + greetee + '!');
		}
	};
});