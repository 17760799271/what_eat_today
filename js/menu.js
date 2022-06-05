// 配料
var Shallot = '葱'; 
var Ginger = '姜'; 
var Garlic = '蒜';
var SichuanPepper = '花椒';
var Pepper = '干辣椒';
var Fennel = '小茴香';
var StarAnise = '八角';
var Myrcia = '香叶';
var Cinnamon = '桂皮';
var Jujube = '枣';

// 食材
var Pork = '猪肉';
var Beef = '牛肉';
var ShreddedMeat = '肉丝';
var Egg = '鸡蛋';
var Tomato = '番茄';
var GreenPepper = '青椒';

function strConcat (name1, name2) {
  return name1 + ' + ' + name2;
};

var Menu = [
    {
      name: "鸡蛋炒青豆",
      mainDosing: [Tomato, Egg], // 主料
      otherDosing: [Shallot, Garlic], // 辅料
    },
    {
      name: "青椒肉丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
    },
    {
      name: "家常茄子",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "麻婆豆腐",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "干锅包菜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "红烧素鸡",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "番茄炒鸡蛋",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "韭菜炒鸡蛋",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "蒜蓉茼蒿",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "酸辣土豆丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "清炒空心菜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "菠菜汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "红烧肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "莲藕排骨汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "大丰收",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "青椒肉丝3",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "鸡腿蒸南瓜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "青椒肉丝5",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "腐竹炒肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "土豆蒸排骨",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "白菜肉片豆腐汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "宫保鸡丁",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "鱼香肉丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "水煮肉片",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "土豆腐乳烧牛腩",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "南瓜炒鸡肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "丸子汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "油焖大虾",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "鱼香茄子",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "脆皮豆腐",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "千页豆腐干锅",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "水煮肉片",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "山药炖排骨",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "红烧鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "木瓜牛奶西米露",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "大盘鸡",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "香煎黄鲫鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "糖醋里脊",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "啤酒鸭",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "香酥带鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "番茄汁黄焖鱼块",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "糯米藕",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "蜜豆钵仔糕",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "清蒸鲈鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "红烧狮子头",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "剁椒鱼头",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "南瓜汤圆",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },
    {
      name: "撞姜奶",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [Shallot, Ginger, Garlic], // 辅料
      
    },

  ]
