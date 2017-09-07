// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var bin = N.toString(2);
    
    var split = bin.split("1");
    var max = 0;
    for (var i = 1; i < split.length - 1; ++i) {
        if (max < split[i].length) {
            max = split[i].length;
        }
    }
    
    return max;
}
