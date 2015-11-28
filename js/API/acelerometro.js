var ac ={
	options:{ frequency: 3000 },
	watchId: null,

	init: function() {
			alert("Iniciar");
			ac.watchID = navigator.accelerometer.watchAcceleration(ac.onSuccess, ac.onError, ac.options);

	},
	stop: function(){
		alert("Detener");
		navigator.accelerometer.clearWatch(ac.watchID);
	},

	 onSuccess: function(acceleration) {

	$('#valor_acelerometro').html('X: ' + acceleration.x + '\n' +
          ' Y: ' + acceleration.y + '\n' +
          ' Z: ' + acceleration.z + '\n' +
          'TS: '      + acceleration.timestamp + '\n');	 	

	},

	onError:function() {
		alert('onError!');
	},

};