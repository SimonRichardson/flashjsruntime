var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.ColorTransform = FlashJSBase.extend({
	constructor: function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset){
		this.base();
		
		this.redMultiplier = redMultiplier == undefined? 1 : redMultiplier;
	    this.greenMultiplier = greenMultiplier == undefined? 1 : greenMultiplier;
	    this.blueMultiplier = blueMultiplier == undefined? 1 : blueMultiplier;
	    this.alphaMultiplier = alphaMultiplier == undefined? 1 : alphaMultiplier;
	    this.redOffset = redOffset == undefined? 0 : redOffset;
	    this.greenOffset = greenOffset == undefined? 0 : greenOffset;
	    this.blueOffset = blueOffset == undefined? 0 : blueOffset;
	    this.alphaOffset = alphaOffset == undefined? 0 : alphaOffset;
	    
	    this.define('color', {
	    	get: function(){
	    		return this.redOffset << 16 | this.greenOffset << 8 | this.blueOffset;
	    	},
	    	set: function(value){
	        	this.blueMultiplier = 0;
		        this.greenMultiplier = 0;
		        this.redMultiplier = 0;
		        this.redOffset = value >> 16 & 255;
		        this.greenOffset = value >> 8 & 255;
		        this.blueOffset = value & 255;
	    	}
	    });
	},
	concat: function(transform) {
	    this.alphaOffset = this.alphaOffset + this.alphaMultiplier * transform.alphaOffset;
	    this.alphaMultiplier = this.alphaMultiplier * transform.alphaMultiplier;
	    this.redOffset = this.redOffset + this.redMultiplier * transform.redOffset;
	    this.redMultiplier = this.redMultiplier * transform.redMultiplier;
	    this.greenOffset = this.greenOffset + this.greenMultiplier * transform.greenOffset;
	    this.greenMultiplier = this.greenMultiplier * transform.greenMultiplier;
	    this.blueOffset = this.blueOffset + this.blueMultiplier * transform.blueOffset;
	    this.blueMultiplier = this.blueMultiplier * transform.blueMultiplier;
	    
	},
	toString: function() {
		return "(redMultiplier=" + this.redMultiplier + ", greenMultiplier=" + this.greenMultiplier + ", blueMultiplier=" + this.blueMultiplier + ", alphaMultiplier=" + this.alphaMultiplier + ", redOffset=" + this.redOffset + ", greenOffset=" + this.greenOffset + ", blueOffset=" + this.blueOffset + ", alphaOffset=" + this.alphaOffset + ")";
	}
});