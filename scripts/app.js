let Numbers = document.querySelectorAll('#numbers');
let Operators = document.querySelectorAll('#operator');
let EqualBtn = document.querySelector('.equal');
let allClear = document.querySelector('.ac');
let Del = document.querySelector('.clear');
let QuestionPanel = document.querySelector('.questionPanel');
let AnswerPanel = document.querySelector('.answerPanel');

console.log(Numbers);
console.log(Operators);
console.log(EqualBtn);
console.log(allClear);
console.log(Del);
console.log(QuestionPanel);
console.log(AnswerPanel);

Numbers.forEach((number) => {
    number.addEventListener('click', function (e) {
        QuestionPanel.innerText += e.target.innerText;
        Operators.forEach((operator) => {
            operator.disabled = false;
        });
    });
});

Operators.forEach((operator) => {
    operator.disabled = true;
    operator.addEventListener('click', function (e) {
        if (e.target.innerText === '%') {
            QuestionPanel.innerText += '/100 *';
        } else {
            QuestionPanel.innerText += e.target.innerText;
        }
        Operators.forEach((operator) => {
            operator.disabled = true;
        });
    });
});

EqualBtn.addEventListener('click', (e) => {
    if (eval(QuestionPanel.innerText) === undefined) {
        AnswerPanel.innerText = '';
    } else {
        AnswerPanel.innerText = eval(QuestionPanel.innerText);
        QuestionPanel.innerText = '';
    }
    Operators.forEach((operator) => {
        operator.disabled = true;
    });
});

Del.addEventListener('click', (e) => {
    AnswerPanel.innerText;
    QuestionPanel.innerText = QuestionPanel.innerText.slice(0, -1);
});

allClear.addEventListener('click', (e) => {
    AnswerPanel.innerText = '';
    QuestionPanel.innerText = '';
});
