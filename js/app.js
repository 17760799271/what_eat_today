var ShowFoodDetails = false; // 控制做法详情展示
var currentFoodData = null; // 当前菜品数据


$(function () {
  initMenu()

  // 初始化菜单;
  function initMenu () {
    var menuList = $('#menuList');
    var menuContent = '';
    Menu.forEach((item, index) => {
      menuContent += '<li ' + 'title= ' + nameConcat(item) + ' data-food-data= ' + JSON.stringify(item) + '>' + item.name + '</li>'
    });
    menuList.append('<ul id="dishNameList">' + menuContent + '</ul>')
    $('#dishNameList').click(function (e) { // 绑定事件
      if (e.target.nodeName === 'UL') return;
      $('#todayMenu span').css('backgroundColor', '#6d8da1')
      $('#dishNameList li').css('backgroundColor', '#6d8da1')
      $(e.target).css('backgroundColor', '#912a2b')
      setFoodDetail(JSON.parse(e.target.dataset.foodData))
    })
  }
  function arithmetic (maxVolume = 40) { // 1.容量： 默认为40两人份
    function makeRandom (lang) {
      var random = Math.round(Math.random() * lang);
      return foodVolume[volumeKeyList[random]]
    }
    var volumeKeyList = Object.keys(foodVolume)
    volumeKeyList.forEach((item, index) => { // 剔除超出maxVolume容量的菜
      if (foodVolume[item] > maxVolume) volumeKeyList.splice(index, 1)
    });
    var volumeList = []; // 菜量列表
    ['', ''].map(item => {
      var _maxVolume = maxVolume;
      if (volumeList.length && _maxVolume) { // 已选中了一个 && 还有余量
        _maxVolume -= volumeList[0];
        const _volumeKeyList = volumeKeyList.filter((item2, index2) => {// 剔除超出maxVolume容量的菜
          return foodVolume[item2] <= _maxVolume && (foodVolume[item2] + _maxVolume) <= maxVolume
        }) 
        if (_volumeKeyList.length) {
          volumeList.push(makeRandom(_volumeKeyList.length -1))
        }
      } else {
        volumeList.push(makeRandom(volumeKeyList.length -1))
      }
    })
    var atLastMenu = []; // 最终菜单
     var filterMenu = JSON.parse(JSON.stringify(Menu)).filter(item => {
      return volumeList.includes(item.volume)
    });
    volumeList.forEach(item => {
      var random = Math.round(Math.random() * (filterMenu.length -1));
      atLastMenu.push(filterMenu[random]);
      filterMenu.splice(random, 1)
    })
 
    // console.log(volumeList)
    // console.log(atLastMenu)
    return atLastMenu;
  }

  // 生成菜单
  $('#createMenu').click(function() { 
    // 选菜重复问题解决
    var lunchList = arithmetic()
    var lunch = ''
    lunchList.forEach(item => {
      lunch += '<span ' + ' data-food-data= ' + JSON.stringify(item) + '>' + item.name + '</span>'
    })
    $('#lunch').html('今日午餐：' + lunch)
    console.log(lunchList)
    var dinnerList = arithmetic()
    var dinner = ''
    dinnerList.forEach(item => {
      dinner += '<span ' + ' data-food-data= ' + JSON.stringify(item) + '>' + item.name + '</span>'
    })
    $('#dinner').html('今日晚餐：' + dinner)
  }) 
  $('#lunch').click(function(e) {
    if (e.target.nodeName !== 'SPAN') return;
    $('#dishNameList li').css('backgroundColor', '#6d8da1')
    $('#todayMenu span').css('backgroundColor', '#6d8da1')
    $(e.target).css('backgroundColor', '#912a2b')
    setFoodDetail(JSON.parse(e.target.dataset.foodData))
  })
  $('#dinner').click(function(e) {
    if (e.target.nodeName !== 'SPAN') return;
    $('#dishNameList li').css('backgroundColor', '#6d8da1')
    $('#todayMenu span').css('backgroundColor', '#6d8da1')
    $(e.target).css('backgroundColor', '#912a2b')
    setFoodDetail(JSON.parse(e.target.dataset.foodData))
  })
  // 关闭菜品介绍
  $('#closeFoodDetail').click(function() {
    $('#container').css('padding-right', 0);
    $('#foodDetail').css('right', '-30%');
  }) 

  // html title 拼接
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

  function setFoodDetail (data) {
    ShowFoodDetails = true;
    $('#container').css('padding-right', '30%');
    $('#foodDetail').css('right', 0);
    $('.mainDosing').html(data.mainDosing.reduce(function(pre, next, index) {
      return pre + '，' + next
    }))
    $('.otherDosing').html(data.otherDosing.reduce(function(pre, next, index) {
      return pre + '，' + next
    }))
    $('.practice').html(data.practice)
  }
});