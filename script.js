let display = document.getElementById('screen');

function append(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearScreen() {
  display.textContent = '0';
}

function backspace() {
  let current = display.textContent;
  if (current.length > 1) {
    display.textContent = current.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (e) {
    display.textContent = 'Error';
  }
}
document.getElementById('toggle-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});
let expression = display.textContent;
let result = eval(expression);
display.textContent = result;

// Add to history
const log = document.createElement('div');
log.textContent = `${expression} = ${result}`;
document.getElementById('history').prepend(log);


if (Math.abs(result) > 1e10 || Math.abs(result) < 1e-6) {
  result = result.toExponential(4);
}
