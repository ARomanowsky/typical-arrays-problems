
exports.min = function min (array) {
    let result;
  if (array === undefined || array[0] === undefined) {
      result = 0;
  } else {
      result = Math.min(...array);
  }
  return result;
}

exports.max = function max (array) {
    let result;
    if (array === undefined || array[0] === undefined) {
        result = 0;
    } else {
        result = Math.max(...array);
    }
    return result;
}

exports.avg = function avg (array) {
    let result;
    if (array === undefined || array[0] === undefined) {
        result = 0;
    } else { 
        result = array.reduce((sum, current) => sum + current, 0) / array.length;
    }
    return result;
}
