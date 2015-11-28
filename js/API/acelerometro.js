var ac ={
	options:{ frequency: 500 },
	watchId: null,

	init: function() {
		alert("Iniciar");
		if (!ac.watchId)
		ac.watchId = navigator.accelerometer.watchAcceleration(ac.onSuccess, ac.onError, ac.options);

	},
	stop: function(){
		alert("Detener");
		if(ac.watchId != null){
			navigator.accelerometer.clearWatch(ac.watchId);
			ac.watchId = null;
			$('#valor_acelerometro').html('Detenido' );	
		}
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