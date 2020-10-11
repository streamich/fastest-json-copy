var isArray = Array.isArray;

function deepClone(obj) {
  if (!obj) return obj;
  if (isArray(obj)) {
    var arr = [];
    var length = obj.length;
    for (var i = 0; i < length; i++) arr.push(deepClone(obj[i]))
    return arr;
  } else if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var length = keys.length;
    var newObject = {};
    for (let i = 0; i < length; i++) {
      var key = keys[i];
      newObject[key] = deepClone(obj[key]);
    }
    return newObject;
  }
  return obj;
}

exports.deepClone = deepClone;
