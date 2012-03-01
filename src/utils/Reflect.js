var utils = utils || {};
utils.Reflect = {
	is: function(instance, klass) {
		if(instance === klass || instance instanceof klass) {
			return true;
		} else {
			var namespace = klass.reflection.namespace.toString();
			var namespaces = instance.reflection.namespaces;
			var total = namespaces.length;
			for(var i=0; i<total; i++) {
				if(namespaces[i].toString() === namespace) {
					return true;
				}
			}
		}
		return false;
	}
}