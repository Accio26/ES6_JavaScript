// 値の条件付き絞り込み
// 50より大きい数字だけに絞り込んで新しい配列に格納してください

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const filteredNumbers = numbers.filter((number) => {
  return number > 50;
});


// filterで権限の管理
// ユーザーオブジェクトの配列から管理者権限を持っているユーザーだけに絞り込んでください。

const users = [{
    id: 1,
    admin: true
  },
  {
    id: 2,
    admin: false
  },
  {
    id: 3,
    admin: false
  },
  {
    id: 4,
    admin: false
  },
  {
    id: 5,
    admin: true
  },
];

const filteredUsers = users.filter((user) => {
  return user.admin === true;
});

filteredUsers;



// rejectを実装してみよう

function reject(array, iteratorFunction) {
  return array.filter((element) => {
    return !iteratorFunction(element);
  });
}
