
var random6 = function() {
    let ColoredLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let i = parseInt(Math.random() * 16);
    if (i < 10) {
        return i; 
    } else {
       return ColoredLetters[(i - 10)];
    }
}

var randomColor = function() {
    let colorForRandom = '#';
    for (let i = 0; i < 6; i++) {
        colorForRandom += random6();
    }
    return colorForRandom;
}

var inputGradient = function() {
    document.querySelector('.gradient').style.backgroundImage = `linear-gradient(to top, ${randomColor()} 0%, ${randomColor()} 100%)`;
}

document.getElementById('btn1').addEventListener('click', () => {
    inputGradient(); 
});

document.getElementById('btn2').addEventListener('click', () => {
    document.getElementById('btn2').classList.toggle('clicked-btn');
    if (document.getElementById('btn2').classList.contains('clicked-btn')) {
        document.querySelector('.main').setAttribute('onmousemove', 'inputGradient()');
    } else {
        document.querySelector('.main').removeAttribute('onmousemove');
    };
});