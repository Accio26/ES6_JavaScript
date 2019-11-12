// 引数がいっぱい
/*
次の関数を可変長引数を扱えるようにリファクタしてください
注意：rest演算子を使う時、引数名をrestと名付ける必要はありません
*/

// 私の書いたコード
function product(...numbers) {
  const numbers = [...numbers];

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}
// あってた


// お手本コード
function product(...numbers) {
  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1)
}



// 配列とspread演算子
// 次のコードをspread演算子を使ってリファクタしてください
function join(array1, array2) {
  return [...array1, ...array2];
}

// 正解コードと同じでした


// RestとSpreadの組み合わせ
// 次のコードをRestとSpread演算子を使ってリファクタしてください

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}


// お手本コード
function unshift(array, ...rest) {
  return [...rest, ...array];
}
