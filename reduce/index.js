const numbers = [10, 20, 30];
const sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += number[i];
}


numbers.reduce((sum, number) => {
  return sum + number;
}, 0); // ここに入れた数字が初期値になる

// 初期値が引き継がれていく

const primaryColors = [{
    color: 'red'
  },
  {
    color: 'yellow'
  },
  {
    color: 'blue'
  }
];




primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color)
  return previous;
}, []);



function balancedParens(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return previous + 1;
    }
    if (char === ')') {
      return previous - 1;
    }
  }, 0);
}

balancedParens('()');
