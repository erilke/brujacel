var br ={
	options:{ frequency: 500 },
	watchId: null,

	init: function() {
		alert("Iniciar");
		if (!br.watchId)
		var watchID = navigator.compass.watchHeading(br.onSuccess, br.onError, br.options);
	},
	stop: function(){
		alert("Detener");
		navigator.compass.clearWatch(br.watchID);
	},
	onSuccess: function(heading) {
    //alert('Heading: ' + heading.magneticHeading);
    	$('#valor_brujula').html('Apuntando al: ' + heading.magneticHeading );	
	},

	onError: function(error) {
	    alert('CompassError: ' + error.code);
	},


};


