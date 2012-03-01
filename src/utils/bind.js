var utils = utils || {};
utils.bind = function(obj, method){
    var f = function() {
        var target = arguments.callee.__target__;
        var method = arguments.callee.__method__;

        return method.apply(target, arguments);
    };

    f.__target__ = obj;
    f.__method__ = method;
    f.__bind__ = true;

    return f;
}