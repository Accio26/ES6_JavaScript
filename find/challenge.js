// 管理者権限を持ったユーザーを探そう！
// ユーザーが入っている配列から管理者権限を(admin)を持っているユーザーを探してください。そのユーザーをadminという変数に格納しましょう。

const users = [{
    id: 1,
    admin: false
  },
  {
    id: 2,
    admin: false
  },
  {
    id: 3,
    admin: true
  }
];

const admin = users.find((user) => {
  return user.admin;
});
// done!

/*
残高から預金口座のアカウントを探そう！
預金残高(balance)が[12]のアカウントを探して「account」っていう変数に格納しよう:)
*/

const accounts = [{
    balance: -10
  },
  {
    balance: 12
  },
  {
    balance: 0
  }
];

const account = accounts.find((account) => {
  return account.balance === 12;
});

// done!


/*
応用問題！findWhere関数を作ってみよう
この演習は難易度が高いようです。ほとんどの場合findでは、あるオブジェクトのプロパティがある値を持っているかどうかを探しまs。
この処理をするために毎回コールバック関数を書くのは少し手間がかかりますよね？
例えばfindWhere(ladders, {height: '6m});
上のようにかけたらコールバック関数を書かずに済むので便利です:)
ここで{height: '6m'}は検索条件になります
はしごの高さが6mの物を探したいときに使います。

warning!!
この演習では、上で使用したfindWhere関数を実装してください。
findWhere関数の戻り値は、検索条件に一致したオブジェクトになります

*/

function findWhere(array, criteria) {
  return array.find((element) => {
    const property = Object.keys(criteria)[0];
    return element[property] === criteria[property];
  });
}

// 自分の力だけでは解決できず。
