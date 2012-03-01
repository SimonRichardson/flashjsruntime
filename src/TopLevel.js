function trace() {
	console.log(Array.prototype.slice.call(arguments).join(" "));
}

// Errors
// Hate doing this, but don't really have a nice way of doing this!
Error.prototype.toString = function(){
	var str = "";
	if(this.name) str += this.name;
	if(!isNaN(this.id)) str += ((str.length > 0) ? ": " : "") + "Error #" + this.id;
	if(this.message) str += ((str.length > 0) ? ": " : "") + this.message;
	return str;
}

function ArgumentError(message, id) {
	this.message = message;
	this.id = id;
	
    Error.apply(this, arguments);
}
ArgumentError.prototype = new Error();
ArgumentError.prototype.constructor = ArgumentError;
ArgumentError.prototype.name = 'ArgumentError';

function IllegalArgumentError(message, id) {
	this.message = message;
	this.id = id;
	
    Error.apply(this, arguments);
}
IllegalArgumentError.prototype = new Error();
IllegalArgumentError.prototype.constructor = IllegalArgumentError;
IllegalArgumentError.prototype.name = 'IllegalArgumentError';

function ReferenceError(message, id){
	this.message = message;
	this.id = id;
	
	Error.apply(this, arguments);
}
ReferenceError.prototype = new Error();
ReferenceError.prototype.constructor = ReferenceError;
ReferenceError.prototype.name = 'ReferenceError';

function TypeError(message, id){
	this.message = message;
	this.id = id;
	
	Error.apply(this, arguments);
}
TypeError.prototype = new Error();
TypeError.prototype.constructor = TypeError;
TypeError.prototype.name = 'TypeError';



// Aliases
function is(instance, klass) {
	return utils.Reflect.is(instance, klass);
}