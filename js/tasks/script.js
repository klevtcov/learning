// Triangle

document.querySelector('.triangle').addEventListener('click', function () {
    var triangle = '#';
    for (let i = 0; i < 7; i++) {
        console.log(triangle);
        triangle += '#';
    }
});

// FizzBuzz

document.querySelector('.fizzbuzz').addEventListener('click', function () {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    };
});

// Reverse String
var reverseString = function (str) {
    var rts = '';
    for (let i = str.length; i > 0; i--) {
        rts += str[i - 1];
    };
    return(rts);
};


// Chessboard
document.querySelector('.chessboard').addEventListener('click', function () {
    var 


});
