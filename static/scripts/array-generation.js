function randomArray (length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.floor(Math.random() * (max) + 1);
    });
}

function multiArray() {
    var arr = new Array([], [])
    for(i = 0; i < 1000; i++) {
        arr.push([]);
    }

    return arr;
}