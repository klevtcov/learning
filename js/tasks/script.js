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
            document.querySelector('.recurtionAnswer').textContent = recurtionValue + ' is even';
        } else if (val == 1) {
            console.log(false);
            document.querySelector('.recurtionAnswer').textContent = recurtionValue + ' is not even';
        } else {
            isEven(val - 2);
        };
    };
    isEven(recurtionValue);

};

// Beans
document.querySelector('.beans').onclick = function () {
    var beansString = document.querySelector('.beansString').value;
    var beansLetter = document.querySelector('.beansLetter').value;
    var countChar = function (str, letter) {
        var count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == letter) {
                count++;
            };
        };
        return count;
    };
    document.querySelector('.beansAnswer').textContent = countChar(beansString, beansLetter) + ' letters ' + beansLetter + ' in ' + beansString;
};

// Range
var rangeArray = [];
var range = function (rangeStart, rangeEnd, step) {
    rangeArray = [];
    if (step > 0) {
        for (let i = rangeStart; i <= rangeEnd; i += step) {
            rangeArray.push(i);
        };
    } else if (step == 0) {
        rangeArray = [];
    } else if (step < 0) {
        for (let i = rangeStart; i >= rangeEnd; i += step) {
            rangeArray.push(i);
        };
    };
    console.log(rangeArray);
    return rangeArray;
};

var rangeSum = function (arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    console.log(sum);
    return sum;
};

/*
step = typeof step !== 'undefined' ?  step : 1;
var range = function (rangeStart, rangeEnd, step) {
    if (step < 0) {
        for (let i = rangeEnd; i >= rangeStart; i += step) {
            rangeArray.push(i);
        };
    } else if (step = 0) {
        rangeArray = [];
    } else {
        for (let i = rangeStart; i <= rangeEnd; i += step) {
            rangeArray.push(i);
        };
    };
    console.log(rangeArray);
    return rangeArray;
};

*/

document.querySelector('.range').onclick = function () {
    var rangeStart = parseFloat(document.querySelector('.rangeStart').value);
    var rangeEnd = parseFloat(document.querySelector('.rangeEnd').value);
    var step = parseFloat(document.querySelector('.rangeStep').value);
    range(rangeStart, rangeEnd, step);
    document.querySelector('.rangeAnswer').textContent = rangeArray;
};

document.querySelector('.rangeSum').onclick = function () {
    var rangeStart = parseFloat(document.querySelector('.rangeStart').value);
    var rangeEnd = parseFloat(document.querySelector('.rangeEnd').value);
    var step = parseFloat(document.querySelector('.rangeStep').value);
    document.querySelector('.rangeSumAnswer').textContent = rangeSum(range(rangeStart, rangeEnd, step));
};


// Recurtion array


var arrayToReverse = ['A', 'B', 'C'];
var reverseArray = function(arr) {
    let reversedArray = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        reversedArray.push(arr[i]);
    };
    return reversedArray;
};

var reverseArrayInPlace = function() {
    arrayToReverse = reverseArray(arrayToReverse);
};

document.querySelector('.recurtionArray').onclick = function () {
    reverseArray(arrayToReverse);
    document.querySelector('.recurtionArrayAnswer').textContent = reverseArray(arrayToReverse);
};

document.querySelector('.recurtionInArray').onclick = function () {
    reverseArrayInPlace(arrayToReverse);
    document.querySelector('.recurtionInArrayAnswer').textContent = reverseArray(arrayToReverse);
};
