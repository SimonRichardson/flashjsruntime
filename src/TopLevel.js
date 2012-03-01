function trace() {
	console.log(Array.prototype.slice.call(arguments).join(" "));
}

function ReferenceError(message, id){
	this.message = message;
	this.id = id;
	
	Error.apply(this, arguments);
}
ReferenceError.prototype = new Error();
ReferenceError.prototype.constructor = ReferenceError;
ReferenceError.prototype.name = 'ReferenceError';
ReferenceError.prototype.toString = function() {
	return this.name + ": Error #"+ this.id +": " + this.message + ".";
};

function IllegalArgumentError(message, id) {
    Error.apply(this, arguments);
}
IllegalArgumentError.prototype = new Error();
IllegalArgumentError.prototype.constructor = IllegalArgumentError;
IllegalArgumentError.prototype.name = 'IllegalArgumentError';

// Aliases
function is(instance, klass) {
	return utils.Reflect.is(instance, klass);
}