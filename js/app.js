$(function () {
  initMenu()
  // 初始化菜单;
  function initMenu () {
    var menuList = $('#menuList');
    var menuContent = '';
    Menu.forEach((item, index) => {
      menuContent += '<li ' + 'title= ' + nameConcat(item) + '>' + item.name + '</li>'
    });
    menuList.append('<ul>' + menuContent + '</ul>')
  }

  $('#createMenu').click(function() {
    var menuCopy = JSON.parse(JSON.stringify(Menu))
    var lunchIndex = + Math.round(Math.random() * (menuCopy.length - 1))
    var lunchName = menuCopy[lunchIndex].name;
    $('#lunch').html('今日午餐： <span ' + 'title=' + nameConcat(menuCopy[lunchIndex]) + '>' + lunchName + '</span>')
    menuCopy.splice(1, lunchIndex)
    var dinnerIndex = + Math.round(Math.random() * (menuCopy.length - 1))
    var dinnerName = menuCopy[dinnerIndex].name;
    $('#dinner').html('今日晚餐： <span ' + 'title=' + nameConcat(menuCopy[dinnerIndex]) + '>' + dinnerName + '</span>')
    menuCopy.splice(1, dinnerIndex)
  }) 

  function nameConcat (data) {
    var mainDosing = '主料：';
    var otherDosing = '辅料：';
    data.mainDosing.forEach((item, index) => {
      mainDosing += item + (index < data.mainDosing.length - 1 ? ',' : '。');
    })
    data.otherDosing.forEach((item, index) => {
      otherDosing += item + (index < data.otherDosing.length - 1 ? ',' : '。');
    })
    return '&#10;' + mainDosing + '&#10;&#10;' + otherDosing + '&#10;';
  }
});