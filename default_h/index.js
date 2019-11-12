// ES5
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // ajaxリクエストをするロジックがここにあると想定
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');



// ES6
// 関数のデフォルト引数
function makeAjaxRequest(url, method = 'GET') { // 凄く短くなった！
  // ajaxリクエストをするロジックがここにあると想定
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', 'POST');






function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) { // = でデフォルト引数をつなぐ
  user.admin = true;

  return user;
}

createAdminUser();
