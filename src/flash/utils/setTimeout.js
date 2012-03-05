var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.setTimeout = function(id) {
	setTimeout(id);
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'setTimeout'), flash.utils.setTimeout);