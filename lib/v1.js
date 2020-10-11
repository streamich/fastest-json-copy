var isArray = Array.isArray;

function copy(obj) {
  if (!obj) return obj;
  if (isArray(obj)) {
    var arr = [];
    var length = obj.length;
    for (var i = 0; i < length; i++) arr.push(copy(obj[i]))
    return arr;
  } else if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var length = keys.length;
    var newObject = {};
    for (let i = 0; i < length; i++) {
      var key = keys[i];
      newObject[key] = copy(obj[key]);
    }
    return newObject;
  }
  return obj;
}

exports.copy = copy;
