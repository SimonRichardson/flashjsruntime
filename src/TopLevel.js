function trace() {
	console.log(Array.prototype.slice.call(arguments).join(" "));
}

// Aliases
function is(instance, klass) {
	return utils.Reflect.is(instance, klass);
}