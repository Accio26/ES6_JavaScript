// あえてvarを使用
// var name = '太郎';
// var title = 'Webアプリケーションエンジニア';
// var hourlySalary = 4000;



// ES6

const name = '太郎';
let title = 'Webアプリケーションエンジニア';
let hourlySalary = 4000;

// 時間が経過したとして。。。

title = 'リードWebアプリケーションエンジニア';
hourlySalary = 4500;





function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  const number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

count('aeiobzxceiaipbiox');
