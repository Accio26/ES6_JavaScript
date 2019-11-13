// ES5
var expense = {
  type: '交際費',
  amount: '4500 JPY'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
const {
  type,
  amount
} = expense;
type;
amount;
// 存在しないオブジェクトのプロパティを参照した時はエラーにはならないがundefinedが入る



// ES5
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
};

function fileSummary(file) {
  return `${file.name}.${file.extension}の容量は${file.size}です。`
}

fileSummary(savedFile);



// ES6
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
};

function fileSummary({ // 関数の引数にも分割代入を使える
  name,
  extension,
  size
}, {
  username
}) {
  return `${username}: ${name}.${extension}の容量は${size}です。`
}

fileSummary(savedFile, {
  username: 'ken'
});







// 配列の分割代入
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [name, ...rest] = companies; // 要素以上に書いてしまってもundefinedが入るだけ
name;
rest;

const firstCompany = companies[0];



const companies = [{
    name: 'Google',
    location: 'マウンテンビュー'
  },
  {
    name: 'Facebook',
    location: 'メンロパーク'
  },
  {
    name: 'Uber',
    location: 'サンフランシスコ'
  }
];

// const location = companies[0].location;
// location;


// 分割代入を使った方法
const [{
  location
}] = companies;

location;



const Google = {
  locations: ['マウンテンビュー', 'ニューヨーク', 'ロンドン']
};

const {
  locations: [first]
} = Google;
first; // マウンテンビューにアクセスできる
// このコードがいいかどうかは別問題





// 分割代入の使いどころ
function signup({ // 順番は関係なくなる
  username,
  password,
  email,
  birthday,
  city
}) {
  // ここでユーザーを作成してDBに保存する
}

const user = {
  username: 'myusername',
  password: 'mypassword',
  email: 'myemail@example.com',
  birthday: '1990/1/1',
  city: '東京'
};

signup(user);








const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

points.map(([x, y]) => {
  return {
    x,
    y
  };
});
// 素敵なコードだ:)
