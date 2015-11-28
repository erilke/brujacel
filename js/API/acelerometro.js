var ac ={
	var options = { frequency: 3000 },
	var watchId = null,

	init: function() {
			alert("Iniciar");
			ac.options = { frequency: 3000 };  // Update every 3 seconds
			ac.watchID = navigator.accelerometer.watchAcceleration(ac.onSuccess, ac.onError, options);

	},
	stop: function(){
		alert("Detener");
		navigator.accelerometer.clearWatch(ac.watchID);
	},

	 onSuccess: function(acceleration) {

	$('#valor_acelerometro').html('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');	 	

	},

	onError:function() {
		alert('onError!');
	},

};