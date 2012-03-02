var flash = flash || {};
flash.display = flash.display || {};
flash.display.SWFVersion = FlashJSBase.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'SWFVersion')
	},
	FLASH1 :1,
	FLASH2 :2,
	FLASH3 :3,
	FLASH4 :4,
	FLASH5 :5,
	FLASH6 :6,
	FLASH7 :7,
	FLASH8 :8,
	FLASH9 :9,
	FLASH10 :10,
	FLASH11 :11,
	FLASH12 :12,
	FLASH13 :13
});