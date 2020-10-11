var isArray = Array.isArray;
var objectKeys = Object.keys;

function copy(val) {
  if (!val) return val;
  if (isArray(val)) {
    var arr = [];
    var length = val.length;
    for (var i = 0; i < length; i++) arr.push(copy(val[i]))
    return arr;
  } else if (typeof val === 'object') {
    var keys = objectKeys(val);
    var newObject = {};
    for (var i = keys.length - 1; i > -1; i--) {
      var key = keys[i];
      newObject[key] = copy(val[key]);
    }
    return newObject;
  }
  return val;
}

exports.copy = copy;
