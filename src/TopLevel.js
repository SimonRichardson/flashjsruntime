// Global methods
function trace() {
	console.log(Array.prototype.slice.call(arguments).join(" "));
}

//Aliases
function is(instance, klass) {
	return utils.Reflect.is(instance, klass);
}
function bind(method, scope) {
	return utils.bind(scope, method);
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

function IllegalOperationError(message, id) {
	this.message = message;
	this.id = id;
	
    Error.apply(this, arguments);
}
IllegalOperationError.prototype = new Error();
IllegalOperationError.prototype.constructor = IllegalOperationError;
IllegalOperationError.prototype.name = 'IllegalOperationError';

function RangeError(message, id){
	this.message = message;
	this.id = id;
	
	Error.apply(this, arguments);
}
RangeError.prototype = new Error();
RangeError.prototype.constructor = RangeError;
RangeError.prototype.name = 'RangeError';

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
