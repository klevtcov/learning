const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const box = document.getElementById('box');

const randomHex = () => {
    const coloredLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let i = parseInt(Math.random() * 16);
    return (i < 10) ? i : coloredLetters[(i - 10)];
};

const randomColor = () => {
    let colorForRandom = '#';
    for (let i = 0; i < 6; i++) {
        colorForRandom += randomHex();
    }
    return colorForRandom;
};

const inputGradient = () => box.style.backgroundImage = `linear-gradient(to top, ${randomColor()} 0%, ${randomColor()} 100%)`;

btn1.addEventListener('click', inputGradient);

btn2.addEventListener('click', () => {
    btn2.classList.toggle('clicked-btn');
    if (btn2.classList.contains('clicked-btn')) {
        box.setAttribute('onmousemove', 'inputGradient()');
    } else {
        box.removeAttribute('onmousemove');
    };
});