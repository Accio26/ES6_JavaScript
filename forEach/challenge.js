// forループからの脱却

function handlePosts() {
  var posts = [{
      id: 23,
      title: 'JSニュース'
    },
    {
      id: 52,
      title: 'リファクター・シティ'
    },
    {
      id: 105,
      title: 'Rubyのいいところ'
    },
  ];

  posts.forEach(function (post) {
    savePost(posts[i]);
  });
}


// 複数の値の処理
var images = [{
    height: 10,
    width: 30
  },
  {
    height: 20,
    width: 90
  },
  {
    height: 54,
    width: 32
  },
];
var area = [];

images.forEach((image) => {
  areas.push(image.height * image.width);
});
console.log(areas);
