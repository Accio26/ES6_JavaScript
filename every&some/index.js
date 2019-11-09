const computers = [
  {
    name: 'Apple',
    ram: 24
  },
  {
    name: 'Compaq',
    ram: 4
  },
  {
    name: 'Acer',
    ram: 32
  }
];

// 16GB ramが必要なソフト

// すべてで動かせるフラグ
const allComputersCanRun = true;
// どれかでは動かせるフラグ
const someComputersCanRun = false;

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

allComputersCanRun;
someComputersCanRun;

computers.every(computer => {
  return computer.ram >= 16;
});

// 論理積 全部あるか？

computers.some(computer => {
  return computer.ram >= 16;
});

// 論理和 一個でもあるか？

const names = ['けん', 'はなこ', 'そういちろう'];

names.every(name => {
  return name.length >= 3;
});

names.some(name => {
  return name.length >= 3;
});

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

const username = new Field('my_username');
const password = new Field('my_password');
const birthday = new Field('2010/10/10');

const fields = [username, password, birthday];

fields.every(field => {
  return field.validate();
});

if (formIsValid) {
  // サーバーにリクエストを送る
} else {
  // エラーを表示する
}
