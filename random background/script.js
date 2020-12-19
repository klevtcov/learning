var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var main = document.querySelector('.main');

var randomHex = function () {
    let coloredLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let i = parseInt(Math.random() * 16);
    if (i < 10) {
        return i;
    } else {
        return coloredLetters[(i - 10)];
    }
};

var randomColor = function () {
    let colorForRandom = '#';
    for (let i = 0; i < 6; i++) {
        colorForRandom += randomHex();
    }
    return colorForRandom;
};

var inputGradient = () => document.querySelector('.gradient').style.backgroundImage = `linear-gradient(to top, ${randomColor()} 0%, ${randomColor()} 100%)`;

btn1.addEventListener('click', inputGradient);

btn2.addEventListener('click', () => {
    btn2.classList.toggle('clicked-btn');
    if (btn2.classList.contains('clicked-btn')) {
        main.setAttribute('onmousemove', 'inputGradient()');
    } else {
        main.removeAttribute('onmousemove');
    };
});