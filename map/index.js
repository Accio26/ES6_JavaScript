var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

let doubled = numbers.map(function (number) {
  return number * 2;
});

doubled;
doubledNumbers;

// ミューテイトは避けた方がいい
// 元ある配列を書き換えること


const cars = [{
    type: '軽自動車',
    price: '安い'
  },
  {
    type: '高級車',
    price: '高い'
  }
];

const prices = cars.map(function (car) {
  return car.price;
});

prices;
// 出力['安い', '高い'];
