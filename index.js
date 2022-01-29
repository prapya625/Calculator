const buttons = document.querySelectorAll('.number');
const screen = document.querySelector('.calc-input');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', function (e) {
        const buttonText = e.target.innerHTML;
        if (buttonText === 'X') {
            screenValue += '*';
            screen.value = screenValue;
        } else if (buttonText === "C") {
            screenValue = "";
            screen.value = "";
        } else if (buttonText === "=") {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}