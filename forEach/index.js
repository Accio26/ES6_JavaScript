let colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

// 数字の配列を用意する
const numbers = [1, 2, 3, 4, 5];
// 合計を保持する変数を用意する
const sum = 0;
// 配列の一つ一つの数字を合計に足す
numbers.forEach(function (number) {
  sum += number;
});
// 合計を表示する
sum;
