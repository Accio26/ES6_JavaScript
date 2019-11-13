// classを使ってみよう
/*
あなたはゲームの開発者だったとします。ゲームに登場する「Monster」というclassを作ってください。
初期化処理では以下を行なってください
・Monsterインスタンスの体力(health)を100に設定してください
・初期化のconstructorには「name」というプロパティを持った[options]オブジェクトが渡されます。
この「name」をMonsterのnameに設定してください
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}
// done :)


// 継承してみよう
/*
前の演習でMonsterを作ったので、Monsterを継承したSnakeというclassを作りましょう
snakeにはbiteというメソッドを実装してください。このメソッドの引数にはsnakeのインスタンスしか入らないという前提があったとします
・biteに渡ってきたsnakeのインスタンスの体力は10減らしてください。
*/
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  bite(targetSnake) {
    targetSnake.health -= 10;
  }
}

// done:)
