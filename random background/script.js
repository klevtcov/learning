console.log('test');
var random = function() {


}

var random6 = function() {
    let ColoredLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let i = parseInt(Math.random() * 16);
    if (i < 10) {
        return i; 
    } else {
       return ColoredLetters[(i - 10)];
    }
}

var colorForRandom = '#';

var randomColor = function() {
    for (let i = 0; i < 6; i++) {
        colorForRandom += random6();
    }
}

randomColor();


console.log(colorForRandom);

