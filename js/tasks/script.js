// Triangle
document.querySelector('.triangle').addEventListener('click', function () {
    var triangleDraw = function () {
        var triangle = '#';
        for (let i = 0; i < 7; i++) {
            console.log(triangle);
            triangle += '#';
        };
    };
    triangleDraw();
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
    return (rts);
};

// Chessboard
document.querySelector('.chessboard').onclick = function () {
    var wht = ' ';
    var blk = '#';
    var row = '';
    var desk = '';
    for (let index = 0; index < 4; index++) {
        row += wht + blk;
    };
    for (let index = 0; index < 8; index++) {
        desk += row + '\n';
        row = reverseString(row);
    };
    console.log(desk);
};

// Minimum
document.querySelector('.funcMin').onclick = function () {
    var minimumA = parseFloat(document.querySelector('.minimumA').value);
    var minimumB = parseFloat(document.querySelector('.minimumB').value);
    var funcMin = (minimumA, minimumB) => minimumA <= minimumB ? minimumA : minimumB;
    console.log(funcMin(minimumA, minimumB));
    document.querySelector('.funcMinAnswer').textContent = funcMin(minimumA, minimumB) + ' меньше';
};

// Recurtion
document.querySelector('.recurtion').onclick = function () {
    var recurtionValue = parseFloat(document.querySelector('.recurtionValue').value);
    var isEven = function (val) {
        if (val < 0) {
            val = -val;
        };
        if (val == 0) {
            console.log(true);
            return true;
        } else if (val == 1) {
            console.log(false);
            return false;
        } else {
            isEven(val - 2);
        };
    };
    isEven(recurtionValue);
    document.querySelector('.recurtionAnswer').textContent = isEven(recurtionValue) + ' is';
};

// Beans





