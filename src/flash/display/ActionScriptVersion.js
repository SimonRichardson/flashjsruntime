var flash = flash || {};
flash.display = flash.display || {};
flash.display.ActionScriptVersion = FlashObject.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'ActionScriptVersion')
	},
	ACTIONSCRIPT2 :2,
	ACTIONSCRIPT3 :3
});