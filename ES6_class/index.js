// ES5
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'ウィーン';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}
// 継承っぽいものをES5でやろうとすると

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'ブブー！！';
}

const toyota = new Toyota({
  color: 'red',
  title: 'アクア'
});
toyota;
toyota.drive();
toyota.honk();



// ES6
class Car {
  constructor(options) {
    this.title = options.title;
  }
  /*
  constructor({title}) { // 分割代入バージョン
    this.title = title;
  }*/
  drive() {
    return 'ウイーン';
  }
}

class Toyota extends Car { //Toyotaのコンストラクターの中でsuperを読んだ時はCar（親要素 継承元）のコンストラクターを読んでる
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'ブブー！';
  }
}

const toyota = new Toyota({
  color: 'red',
  title: 'アクア'
});
toyota;
toyota.drive();
toyota.honk();

/*
const car = new Car({
  title: 'アクア'
}); // newでインスタンスが作られる
car;
car.drive();
*/






// 使い所は？
// React 例
React.createClass({
  doSomething() {},
  doSomethingElse() {

  }
});

class MyComponent extends Component {
  doSomething() {

  }

  doSomethingElse() {

  }
}

class MyOtherComponent extends MyComponent {

}
