function trace() {
	console.log(Array.prototype.slice.call(arguments).join(" "));
}
function is(instance, klass) {
	if(instance === klass || instance instanceof klass) {
		return true;
	} else {
		var namespace = klass.reflection.namespace.toString();
		var namespaces = instance.reflection.namespaces;
		var total = namespaces.length;
		for(var i=0; i<total; i++) {
			trace(namespaces[i].toString());
			if(namespaces[i].toString() === namespace) {
				return true;
			}
		}
	}
	return false;
}