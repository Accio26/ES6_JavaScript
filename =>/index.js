// ES5
const add = function (a, b) {
  return a + b;
}

add(1, 2);


// ES6
const add = (a, b) => {
  return a + b;
}

add(1, 2);


// 1行の場合は？
const add = (a, b) => a + b; // 省略できるよ:)


const double = function (number) {
  return 2 * number;
}

double(8);

const double = number => 2 * number; // 引数が一つなら()も消せる
double(8);


const double = (number1, number2) => {
  return number1 + number2;
}

double(3, 5);



const numbers = [1, 2, 3];

numbers.map(number => 2 * number);



// ES5
const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member}は${this.teamName}の所属です`; // コールバック関数の中は別世界 thisが消えてしまう
    }.bind(this)); // thisの挙動には気をつけろ
  }
};


const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    // this === team
    return this.members.map((member) => { // アロー関数が書かれた場所でthisが変わる //構文的なthis?
      return `${member}は${this.teamName}の所属です`;
    });
  }
};


team.teamSummary();
