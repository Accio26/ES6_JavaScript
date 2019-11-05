// オブジェクトの配列から興味のある値だけ引き抜く
var images = [{
    height: '34px',
    width: '39px'
  },
  {
    height: '54px',
    width: '19px'
  },
  {
    height: '83px',
    width: '75px'
  },
];

var heights;

var heights = images.map((image) => {
  return image.height;
});

heights;


// mapで演算

var trips = [{
    distance: 34,
    time: 10
  },
  {
    distance: 90,
    time: 50
  },
  {
    distance: 59,
    time: 25
  }
];

var speeds;


var speeds = trips.map((trip) => {
  return trip.distance / trip.time;
});

speeds;




// 応用問題 -pluckの実装

function pluck(array, property) {
  // pluck関数の中身を実装してください
  return array.map((element) => {
    return element[property];
  });
}

var colorObjects = [{
  color: '赤'
}, {
  color: '青'
}, {
  color: '黄色'
}];

var colorNames = pluck(colorObjects, 'color');
