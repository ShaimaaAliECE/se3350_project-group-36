function randomArray (length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max - 1) + 1;
    });

}