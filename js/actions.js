//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	init: function(){
		$("#acelerometro .individual li").tap(fn.acTap);
		$("#brujula .individual li").tap(fn.brTap);
	},
	ready:function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	acTap: function(){
		if($(this).index() == 0)
			ac.init();
		else
			ac.stop();
	},
		brTap: function(){
		if($(this).index() == 0)
			br.init();
		else
			br.stop();
	}

};




//$(fn.init);
$(fn.ready);