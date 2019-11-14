const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];
let total = 0;
for (let number of numbers) {
  total += number;
}



///////////////////
// generator入門


function* shopping() { //アスタリスクを追加するとgeneratorになる
  // 歩道

  // 歩道を歩いてお店に行く

  // お店に到着したのでお金を持ってお店に入る
  const stuffFromStore = yield 'お金';

  // コインランドリーに到着したので、服を持って入る
  const cleanClothes = yield '汚れた服';

  // 家に歩いて帰る
  return [stuffFromStore, cleanClothes];
}

// お店関連の世界
const gen = shopping();
gen.next(); // 家から歩道に出る

gen.next('日用品'); // お店で買い物をして日用品を持って歩道に出る

gen.next('綺麗な服');






// generatorの書き方
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
myColors;






// generatorの実用的な使い方
const testingTeam = {
  lead: '典子',
  tester: '隆',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};



// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}

names; // 出力：太郎、花子、次郎、典子、隆












// generatorと再帰処理
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() { // classの中にiteratorを定義する方法
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}


const children = [
  new Comment('賛成！！', []),
  new Comment('反対！！', []),
  new Comment('うーん。。。', [])
];

const tree = new Comment('非常に良い記事です！', children);

const values = [];
for (let value of tree) {
  values.push(value);
}

values;
