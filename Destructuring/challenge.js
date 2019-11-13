// 分割代入してみよう
/*
下のコードの「isEngineer」関数の中で「profile」がなんども参照されています。
分割代入を使って「title」と「department」を抽出して、リファクタを行なってください
*/

const profile = {
  title: 'エンジニア',
  department: '開発部'
};

function isEngineer({
  title,
  department
}) {
  return title === 'エンジニア' && department === '開発部';
}

// done:)

// 配列の分割代入をしてみよう
/*
下の「classes」変数は二次元配列で、中の配列にはそれぞれ生徒が受講しているクラスの情報が格納してあります。
この二次元配列を、オブジェクトの配列に変換してください。オブジェクトのプロパティはそれぞれ「subject」、「teacher」として
「classesAsObject」変数に格納してください。配列の分割代入と、mapを使ってください。
配列の中身はそれぞれ[subject, time, teacher]となっています。
結果の配列は以下のような形になるように実装してください
const classAsObject = [{subject: '地理', time: '4二限目', teacher: '田中先生'}]
注意：上記を答えにするわけではありません。オブジェクトを配列として持つように変換するという意味です
*/

const classes = [
  ['化学', '1時限目', '鈴木先生'],
  ['物理', '2時限目', '佐藤先生'],
  ['数学', '3時限目', '木村先生']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return {
    subject,
    time,
    teacher
  };
});


// done:)



// 分割代入と再帰処理
/*
このコース全体を通してもきっと最も難しい問題です！
配列の分割代入、再帰処理、Rest/Spread演算子を全て使って「double」関数を実装してください。
「double」関数は、与えられた配列の数値をすべて2倍にします。
配列の便利メソッドは使ってはいけません！
map, foeEach, reduceを使えば簡単に実装できてしまいますが、ここはあえて便利メソッドを使わずに実装してください。
*/
const numbers = [1, 2, 3];

function double([head, ...rest]) {
  if (!head) {
    return [];
  }

  return [2 * head, ...double(rest)];
}

// わからず、答えを見てしまった。 復習しよう
