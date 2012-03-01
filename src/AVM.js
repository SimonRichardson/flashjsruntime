var AVM = FlashJSBase.extend({
	constructor: function(){
		this.base();
		this._.bootTime = new Date().getTime();
		
		this.define('bootTime', {
			get: function(){
				return this._.bootTime;
			}
		})
	}
});
// Auto boot the avm
var avm = new AVM();