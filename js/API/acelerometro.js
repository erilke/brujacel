var ac ={
	options:{ frequency: 500 },
	watchId: null,

	init: function() {
		alert("Iniciar");
		if (!ac.watchId)
		ac.watchID = navigator.accelerometer.watchAcceleration(ac.onSuccess, ac.onError, ac.options);

	},
	stop: function(){
		alert("Detener");
		navigator.accelerometer.clearWatch(ac.watchID);
	},

	 onSuccess: function(acceleration) {

	$('#valor_acelerometro').html('X: ' + acceleration.x + '\n' +
          ' Y: ' + acceleration.y + '\n' +
          ' Z: ' + acceleration.z + '\n' );	 	

	},

	onError:function() {
		alert('onError!');
	},

};