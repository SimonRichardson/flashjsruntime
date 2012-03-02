var flash = flash || {};
flash.display = flash.display || {};
flash.display.ActionScriptVersion = FlashJSBase.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'ActionScriptVersion')
	},
	ACTIONSCRIPT2 :2,
	ACTIONSCRIPT3 :3
});