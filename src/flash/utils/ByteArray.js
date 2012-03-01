var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.ByteArray = FlashJSBase.extend({
	constructor: function(){
		this.base();
		
		this._.data = [];
		
		this.position = 0;
		
		//this.define('bytesAvailable');
 	 	//this.define('defaultObjectEncoding');
 	 	//this.define('endian');
 	 	this.define('length', {
 	 		get: function(){
 	 			return this._.data.length;
 	 		},
 	 		set: function(value){
 	 			this._.data.length = value;
 	 		}
 	 	});
 	 	//this.define('objectEncoding');
	},
	clear: function(){
		this.position = 0;
		this._.data.length = 0;
	},
	compress: function(algorithm){
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
	toString: function(){
	},
	uncompress: function(algorithm){
	},
	writeBoolean: function(value){
		this._.data.push(value ? 1 : 0);
		this.position++;
	},
	writeByte: function(value){
		this._.data.push((value & 0xff) - 256);
		this.position++;
	},
	writeBytes: function(bytes, offset, length){
		offset = offset == undefined? 0 : offset;
		length = length == undefined? 0 : length;
	},
	writeDouble: function(value){
	},
	writeFloat: function(value){
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
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'utils', 'ByteArray')
	}
});