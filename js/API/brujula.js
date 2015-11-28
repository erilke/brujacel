var br ={
	options:{ frequency: 500 },
	watchId: null,

	init: function() {
		alert("Iniciar");
		if (!br.watchId)
		br.watchId = navigator.compass.watchHeading(br.onSuccess, br.onError, br.options);
	},
	stop: function(){
		alert("Detener");
		if(br.watchId != null){
			navigator.compass.clearWatch(br.watchId);
			br.watchId = null;
			$('#valor_brujula').html('Detenida');	

		}

	},
	onSuccess: function(heading) {
    	$('#valor_brujula').html('Grados ' + heading.magneticHeading );	
	},

	onError: function(error) {
	    alert('CompassError: ' + error.code);
	}


};


