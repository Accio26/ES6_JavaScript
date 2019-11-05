const products = [{
    name: 'きゅうり',
    type: '野菜',
    quantity: 0,
    price: 1
  },
  {
    name: 'バナナ',
    type: 'フルーツ',
    quantity: 10,
    price: 15
  },
  {
    name: 'セロリ',
    type: '野菜',
    quantity: 30,
    price: 9
  },
  {
    name: 'オレンジ',
    type: 'フルーツ',
    quantity: 3,
    price: 5
  },
];


// 種類が野菜で、量が0個より多くて、値段が10より小さい

products.filter((product) {
  return product.type === '野菜' && product.quantity > 0 && product.price < 10;
});


const filteredProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
};

// filteredProducts;

products.filter((product) => {
  return product.type === 'フルーツ' // returnを忘れない
});



const post = {
  id: 4,
  title: '初めての投稿'
};
const comments = [{
    postId: 4,
    content: 'いい記事ですね'
  },
  {
    postId: 3,
    content: '勉強になりました'
  },
  {
    postId: 4,
    content: 'なるほど'
  },
];

function commentsForPost(post, comments) {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
}


commentsForPost(post, comments);
