const display = document.getElementById('display');
const buttonBox = document.querySelector('.button-box');

if (!display || !buttonBox) {
  throw new Error('Calculator DOM elements not found');
}

const BUTTON_VALUES = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
  doubleZero: '00',
  divide: '/',
  multiply: '*',
  minus: '-',
  plus: '+',
  dot: '.',
};

const OPERATORS = ['+', '-', '*', '/'];
const SAFE_EXPRESSION = /^[0-9+\-*/().\s]+$/;

const getLastCharacter = () => display.value.slice(-1);
const currentOperand = () => display.value.split(/[+\-*/]/).pop();

function setDisplay(value) {
  display.value = value;
}

function clearDisplay() {
  setDisplay('');
}

function backspace() {
  setDisplay(display.value.slice(0, -1));
}

function appendValue(value) {
  if (display.value === 'Invalid Syntax') {
    clearDisplay();
  }

  const lastChar = getLastCharacter();

  if (value === '00') {
    if (display.value === '' || display.value === '0') {
      setDisplay('0');
      return;
    }
    setDisplay(display.value + '00');
    return;
  }

  if (value === '.') {
    const operand = currentOperand();
    if (operand.includes('.')) return;
    if (operand === '') {
      setDisplay(display.value + '0.');
      return;
    }
  }

  if (OPERATORS.includes(value)) {
    if (display.value === '' && value !== '-') return;
    if (OPERATORS.includes(lastChar)) {
      setDisplay(display.value.slice(0, -1) + value);
      return;
    }
  }

  if (/^[0-9]$/.test(value) && display.value === '0' && !display.value.includes('.')) {
    setDisplay(value);
    return;
  }

  setDisplay(display.value + value);
}

function evaluateExpression() {
  const expression = display.value.trim();
  if (!expression || !SAFE_EXPRESSION.test(expression)) {
    setDisplay('Invalid Syntax');
    return;
  }

  try {
    // eslint-disable-next-line no-new-func
    const result = Function('"use strict"; return (' + expression + ')')();
    setDisplay(Number(result).toFixed(3).replace(/\.?0+$/, ''));
  } catch {
    setDisplay('Invalid Syntax');
  }
}

function applyPercentage() {
  const value = parseFloat(display.value);
  if (Number.isNaN(value) || display.value.trim() === '') return;
  setDisplay(String(value / 100));
}

function handleButtonClick(event) {
  const button = event.target.closest('button');
  if (!button) return;

  const { id } = button;

  if (id === 'c') {
    clearDisplay();
    return;
  }

  if (id === 'clearOnce') {
    backspace();
    return;
  }

  if (id === 'percentage') {
    applyPercentage();
    return;
  }

  if (id === 'equal') {
    evaluateExpression();
    return;
  }

  const value = BUTTON_VALUES[id];
  if (value) {
    appendValue(value);
  }
}

function handleKeyDown(event) {
  const { key } = event;

  if (key === 'Enter') {
    event.preventDefault();
    evaluateExpression();
    return;
  }

  if (key === 'Backspace') {
    event.preventDefault();
    backspace();
    return;
  }

  if (key === 'Escape') {
    event.preventDefault();
    clearDisplay();
    return;
  }

  if (key === '%') {
    event.preventDefault();
    applyPercentage();
    return;
  }

  if (/^[0-9]$/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    event.preventDefault();
    appendValue(key);
  }
}

buttonBox.addEventListener('click', handleButtonClick);
document.addEventListener('keydown', handleKeyDown);
