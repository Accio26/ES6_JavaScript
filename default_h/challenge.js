// 関数のデフォルト引数を使ってみよう
// 次のコードを関数のデフォルト引数を使ってリファクタしてください。不要なコードを消し忘れないように注意してください。

function sum(a, b = undefined) {
  a = 0;
  b = 0;

  return a + b;
}

// ソースめちゃくちゃ短くなった:)


// 続・関数のデフォルト引数を使ってみよう
// 次のコードを関数のデフォルト引数を使ってリファクタしてください。不要なコードを削除するのを忘れないでください。

function addOffset(style = !style) {
  style = {};
  style.offset = '10px';

  return style;
}


// お手本コード
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}

// こちらの方がスマート
