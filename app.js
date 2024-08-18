const randomNumberGenerater = () => {
    return Math.ceil(Math.random() * 20);
};
let correctNumber = randomNumberGenerater();
console.log(correctNumber)

const paigham = document.querySelector('#paigham');
const score = document.querySelector('#score');
const highScore = document.querySelector('#high-score');
const body = document.querySelector('body');
const questionMark = document.querySelector('#questionMark');

const checkHandler = () => {
    const inputValue = document.querySelector('#userAnswer');
    console.log(inputValue.value);
    if (inputValue.value == correctNumber) {
        paigham.innerHTML = '🎉 You Win 🎉';
        body.style.backgroundColor = 'green';
        score.innerHTML = +score.innerHTML + 1;
        if (+score.innerHTML > +highScore.innerHTML) {
            highScore.innerHTML = score.innerHTML;
        }
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value = '';
            correctNumber = randomNumberGenerater();
            console.log(correctNumber);
        }, 5000);
    } else if (inputValue.value < correctNumber) {
        paigham.innerHTML = '😢 You lost, opps very low 😢';
        body.style.backgroundColor = 'red';
        score.innerHTML = +score.innerHTML - 1;
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value = '';
        }, 3000);
    } else {
        paigham.innerHTML = '😢 You lost, opps very high 😢';
        body.style.backgroundColor = 'red';
        score.innerHTML = +score.innerHTML - 1;
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value = '';
        }, 3000);
    }
};
