define(function(require){
	require('lib/app');

	App.greeter = {
		greet: function(greetee){
			console.log('Hello ' + greetee + '!');
		}
	};
});