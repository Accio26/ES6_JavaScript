let users = [{
    name: '太郎'
  },
  {
    name: '二郎'
  },
  {
    name: '三郎'
  }
];


users.find((user) => {
  return user.name === '二郎';
});


// users.find(function (user) {
//   return user.name === '二郎';
// });

// for (let i = 0; i < users.length; i++) {
//   if (users[i].name === '二郎') {
//     user = users[i];
//     break;
//   }
// }



////////////////////
//少し複雑なパターン
///////////////////

// Car((model) => {
//   this.model = model;
// })

function Car(model) {
  this.model = model;
}

const cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア')
];

cars.find((car) => {
  return car.model === 'アクア';
});





const posts = [{
    id: 1,
    title: '古い投稿'
  },
  {
    id: 2,
    title: '新しい投稿'
  }
];

const comment = {
  postId: 2,
  content: 'いいね！'
}

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);




// varは使うな。
