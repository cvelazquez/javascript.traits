function use(objectClass, traitFunction){
	if ( typeof traitFunction == 'function' ) {
		var name = (traitFunction.name) ? traitFunction.name : traitFunction.constructor.name;
		if ( 'prototype' in objectClass ) {
			objectClass.prototype[name] = function(){
				return traitFunction.apply(this, arguments);
			}
		} else {
			if ( objectClass.constructor != 'Object' ) {
				use(objectClass.constructor, traitFunction);
			} else {
				throw new Error("First parameter must be a Class");
			}
		}
	} else if ( typeof traitFunction == 'object' ) {
		for ( var i in traitFunction ) {
			use(objectClass, traitFunction[i]);
		}
	}
};
