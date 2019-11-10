// constとlet変数を使い分けよう
/*
Facebookのプロフィールを管理するアプリを作っていると想定してください。プロフィールは
名前name 年齢age 誕生日dateOfBirthの情報を持っているとします。この3つの変数を将来変わる可能性があるかどうかで
constとletに分けて宣言してください。
*/

const name = '太郎';
let age = 20;
const dateOfBirth = '2016年1月1日';



// constとletでリファクタリング
/*
次のコードでは変数の宣言にconstとletではなくvarを使っています
これらをconstとletに置き換えてください。
変更する際に再代入が発生するかどうかでconstとletを使い分けてください
*/

const statuses = [{
    code: 'OK',
    response: '正常に完了しました'
  },
  {
    code: 'FAILED',
    response: 'エラーが発生しました'
  },
  {
    code: 'PENDING',
    response: '処理中です...'
  }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
