// Promiseの3つの状態
/*
unresolved 未解決：処理が終わるのを待っている ここが終わると下記の二つにのどちらかに遷移する
resolved 成功：処理が終わって成功した
rejected 失敗：処理は失敗で終わった

Promise 成功→resolved→コールバック then
Promise 失敗→rejected→コールバック catch
*/


// Promiseを作ってみよう
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000)
});

promise
  .then(() => console.log('処理が完了しました！！'))
  .then(() => console.log('ここも実行されるよ！！'))
  .catch(() => console.log('問題発生！！'));






// fetch
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
