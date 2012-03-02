var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.Endian = FlashJSBase.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'utils', 'Endian')
	},
	BIG_ENDIAN: "bigEndian",
	LITTLE_ENDIAN: "littleEndian"
});