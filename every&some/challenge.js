// 全員回答済みかどうか確認する

const users = [{
    id: 21,
    hasSubmitted: true
  },
  {
    id: 62,
    hasSubmitted: false
  },
  {
    id: 4,
    hasSubmitted: true
  }
];

const hasSubmitted;

users.every((user) => {
  return user.hasSubmitted === true;
});

// done!



// 通信中のリクエストの確認
/*
ネットワーク通信に関連するリソースが配列に格納してあります。
一つでもstatusがpending状態であればinProgress変数にtrueが入るようにしてください
*/


const requests = [{
    url: '/photos',
    status: 'complete'
  },
  {
    url: '/albums',
    status: 'pending'
  },
  {
    url: '/users',
    status: 'failed'
  }
];

const inProgress = requests.some((request) => {
  return request.status === 'pending';
});
