// 走行距離を求めよう
// reduceを使って走行距離の合計を求めてください。結果はtotalDistanceという変数に格納してください

const trips = [{
    distance: 34
  },
  {
    distance: 12
  },
  {
    distance: 1
  }
];

const totalDistance = trips.reduce((sum, trip) => {
  return trip.distance + sum;
}, 0);
// done :)


// reduceでプロパティを集約
/*
仕事場の通常のデスクstringとスタンディングデスクstandingの数をreduceを使って集計します
結果は{ sitting: 3, standing: 2}の形にしてください。初期値はすでに設定済みです

ヒント！reducerの中で集計してくオブジェクトをreturnするのを忘れないこと
*/


const desks = [{
    type: 'sitting'
  },
  {
    type: 'standing'
  },
  {
    type: 'sitting'
  },
  {
    type: 'sitting'
  },
  {
    type: 'standing'
  }
];

const deskTypes = desks.reduce((sum, desk) => {
  if (desk.type === 'sitting') {
    sum.sitting++;
  } else {
    sum.standing++;
  }

  return sum;
}, {
  sitting: 0,
  standing: 0
});


// 答えを見てしまった。 復習しましょうね



// 応用問題：unique関数を作ってみよう
/*
配列の中の重複した要素を除外するuniqueという関数を作ってください。
例えば以下のように動作します
const numbers = [1, 1, 2, 3, 4, 4];
上の配列があった場合、結果は
[1,2,3,4]
ヒント！ reduceとfindを使います
*/

function unique(array) {
  return array.reduce((acc, element) => {
    const existingElement = acc.find((target) => {
      return target === element;
    });
    if (!existingElement) {
      acc.push(element);
    }
    return acc;
  }, []);
}


// 答え見ました。 復習せいよ
