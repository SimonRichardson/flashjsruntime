var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.Endian = FlashObject.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'utils', 'Endian')
	},
	BIG_ENDIAN: "bigEndian",
	LITTLE_ENDIAN: "littleEndian"
});