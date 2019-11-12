function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

// Rest演算子
function addNumbers(...numbers) { // 入ってきたものを配列に変換してくれる
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);






const defaultColors = ['赤', '緑', ];
const userFavoriteColors = ['オレンジ', '黄'];
// ES5
defaultColors.concat(userFavoriteColors);


const defaultColors = ['赤', '緑', ];
const userFavoriteColors = ['オレンジ', '黄'];
const fallColors = ['茶', '紅葉'];
// ES6
// スプレッド演算子！
['青', ...fallColors, ...defaultColors, ...userFavoriteColors]; // 配列の中身を展開してくれる 順番通りに展開してくれる
// 間とかに入れても反映してくれる 視覚的にも楽






function validateShoppingList(...items) { // Rest演算子
  if (items.indexOf('牛乳') < 0) {
    return ['牛乳', ...items]; // スプレッド演算子
  }

  return items;
}

validateShoppingList('オレンジ', 'パン', '牛乳');




// 実際のユースーケース
const MathLibrary = {
  calculateProduct(...rest) { // Rest演算子
    return this.multiply(...rest); // スプレッド演算子
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(2, 3);
MathLibrary.multiply(2, 3);
