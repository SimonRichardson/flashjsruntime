var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.ByteArray = RemedyBase.extend({
	constructor: function(){
		this.base();
		
		this._.data = [];
		
		this.position = 0;
		this.endian = flash.utils.Endian.BIG_ENDIAN;
		
		//this.define('bytesAvailable');
 	 	//this.define('defaultObjectEncoding');
 	 	this.define('length', {
 	 		get: function(){
 	 			return this._.data.length;
 	 		},
 	 		set: function(value){
 	 			this._.data.length = value;
 	 		}
 	 	});
 	 	//this.define('objectEncoding');
 	 	
 	 	this._.writeFloat = function(data, precisionBits, exponentBits){
 	 		
 	 	};
	},
	clear: function(){
		this.position = 0;
		this._.data.length = 0;
	},
	compress: function(algorithm){
	},
	uncompress: function(algorithm){
	},
	deflate: function(){
	},
	inflate: function(){
	},
	readBoolean: function(){
		return (this._.data[this.position++] & 0xff) ? true : false;
	},
	readByte: function(){
		return (this._.data[this.position++]);
	},
	readBytes: function(bytes, offset, length){
		offset = offset == undefined? 0 : offset;
		length = length == undefined? 0 : length;
	},
	readDouble: function(){
	},
	readFloat: function(){
	},
	readInt: function(){
	},
	readMultiByte: function(length, charSet){
	},
	readObject: function(){
	},
	readShort: function(){
	},
	readUnsignedByte: function(){
	},
	readUnsignedInt: function(){
	},
	readUnsignedShort: function(){
	},
	readUTF: function(){
	},
	readUTFBytes: function(length){
	},
	writeBoolean: function(value){
		this._.data.push(value ? 1 : 0);
		this.position++;
	},
	writeByte: function(value){
		value &= 0xff;
		if(value > 127) {
			value -= 256;
		}
		this._.data.push(value);
		this.position++;
	},
	writeBytes: function(bytes, offset, length){
		offset = offset == undefined? 0 : offset;
		length = length == undefined? 0 : length;
	},
	writeDouble: function(value){
		this._.data.push(this._.data, this._.writeFloat(value, 52, 11));
		this.position += 8;
	},
	writeFloat: function(value){
		this._.data.push(this._.writeFloat(value, 23, 8));
		this.position += 8;
	},
	writeInt: function(value){
	},
	writeMultiByte: function(value, charSet){
	},
	writeObject: function(object){
	},
	writeShort: function(value){
	},
	writeUnsignedInt: function(value){
	},
	writeUTF: function(value){
	},
	writeUTFBytes: function(value){
	},
	toString: function(){
		return this._.data.join('');
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'utils', 'ByteArray')
	}
});