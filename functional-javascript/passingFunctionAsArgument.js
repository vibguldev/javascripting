function repeat(operation, limit) {
    while (limit!=0) {
        operation();
        limit = limit - 1;
    }
}

module.exports = repeat