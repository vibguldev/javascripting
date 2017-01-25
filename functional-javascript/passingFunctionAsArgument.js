function repeat(operation, limit) {
  if (arguments.length === 2) {
    if (operation instanceof Function === true) {
      if (typeof limit === 'number') {
        while (limit != 0) {
          operation();
          limit = limit - 1;
        }
        return limit
      } else {
        return "not a number";
      }
    } else {
      return "not an operation";
    }
  }
  else {
    return "insufficient arguments"
  }
}

module.exports = repeat