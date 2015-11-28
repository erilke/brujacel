//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	init: function(){
		$("#acelerometro .individual li").tap(fn.acTap);
		$("#brujula .individual li").tap(fn.brTap);
	},
	acTap: function(){
		if($(this).index() == 0)
			ac.init();
		else
			ac.stop();
	},
		brTap: function(){
		if($(this).index() == 0)
			ac.init();
		else
			ac.stop();
	}

};




$(fn.init);