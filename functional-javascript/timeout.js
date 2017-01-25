function repeat(operation, num) {
  setTimeout(operation,50);
  
  if (num <= 0) return
  
  return repeat(operation, --num)
}

module.exports = repeat