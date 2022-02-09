function randomArray (length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.floor(Math.random() * (max) + 1);
    });
}