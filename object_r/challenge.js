// ES6のオブジェクトリテラルでコードをすっきり
// 次のコードを、ES6で強化されたオブジェクトリテラルを使ってリファクタしてください。

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = {
  red,
  blue
};

// done :)


// 続ES6のオブジェクトリテラルでコードをすっきり
// 次のコードを、ES6で強化されたオブジェクトリテラルを使ってリファクタしてください。

const fields = ['firstName', 'lastName', 'phoneNumber'];
const props = {
  fields
};
// done:)


// 関数内でもオブジェクトリテラル
// 次のコードをES6で強化されたオブジェクトリテラルを使ってリファクタしてください

const canvasDimensions = ((width, initialHeight) => {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
});

// 回答とは異なった記述:) yay



// またまたオブジェクトリテラルでリファクタ
// 次のコードをES6で強化されたオブジェクトリテラルを使ってリファクタしてください
const color = 'red';
const Car = {
  color,
  drive: function () {
    return 'ブーーン!';
  },
  getColor: function () {
    return this.color;
  }
};

// done
