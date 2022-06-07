/* 配料 */
var LittleShallot = '小香葱'; // 小葱炒菜
var BigShallot = '大葱'; // 大葱炖汤
var Ginger = '姜'; 
var Garlic = '蒜';
var MincedGarlic = '蒜蓉';
var SichuanPepper = '花椒';
var Pepper = '干辣椒';
var Fennel = '小茴香';
var StarAnise = '八角';
var Myrcia = '香叶';
var Cinnamon = '桂皮';
var Jujube = '枣';
var Milk = '牛奶';
/* 食材 */
// ---肉---
var ShreddedMeat = '肉丝';
var SlicedMeat = '肉片';
var Pork = '猪肉';
var Ribs = '排骨';
var Tenderloin = '里脊';
var Beef = '牛肉';
var Sirloin = '牛腩';
var Chicken = '鸡肉';
var Drumstick = '鸡腿';
var DicedChicken = '鸡丁';
var Mutton = '羊肉';
var Fish = '鱼';
var FishCube = '鱼块';
var FishHead = '鱼头';
var Crucian = '鲫鱼';
var Hairtail = '带鱼';
var Bass = '鲈鱼';

var Prawn = '虾';
// ---罐头---
var FermentedBeanCurd = '腐乳';
// ---冻品---
var SweetDumplings = '汤圆';
// ---蔬菜---
var Egg = '鸡蛋';
var GreenSoyaBean = '青豆';
var Tomato = '番茄';
var GreenPepper = '青椒';
var BeanCurd = '豆腐';
var QianYeTofu = '千叶豆腐';
var Eggplant = '茄子';
var Cabbage = '包菜';
var potato = '土豆';
var leek = '韭菜';
var crowndaisy = '茼蒿';
var waterSpinach = '空心菜';
var spinach = '菠菜';
var lotusRoot = '莲藕';
var pumpkin = '南瓜';
var driedBeancurdSticks = '腐竹';
var whiteCabbage = '白菜';
var ball = '丸子';
var yam = '山药';
var pawpaw = '木瓜';
var tapiocaPudding = '西米露';


var commonDosing = { // 常用公共配料
  LG: [LittleShallot, Garlic], // 葱蒜
  LGG: [LittleShallot, Ginger, Garlic], // 葱姜蒜
  Ribs: [BigShallot, Ginger, SichuanPepper, Fennel, StarAnise, Myrcia, Cinnamon, Jujube, Milk], // 排骨
}
/* 菜品分级策略: (难度)
  1-10: 初级菜;
  11-20: 中级菜;
  21-30: 高级菜;

  菜量分级策略: (量)
  10为满；
  1-3: 小份菜分量；甜品、零食
  4-7: 家常菜分量，一盘；
  8-10: 大份分量 如大盘鸡、杂粮排骨
*/
var foodGrade = {
  Easy: 10, // 例：番茄炒蛋
  Normal: 20, // 例：地三鲜
  Hard: 30, // 例：杂粮排骨
  SuperHard: 50, // 例：黄河大鲤鱼
}
var foodVolume = {
  Small: 10, // 例：番茄炒蛋
  Normal: 20, // 例：地三鲜
  Big: 30, // 例：杂粮排骨
  SuperBig: 50, // 例：大炖菜
}

var Menu = [
    {
      name: "鸡蛋炒青豆",
      mainDosing: [Tomato, Egg], // 主料
      otherDosing: commonDosing.LG, // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
    },
    {
      name: "青椒肉丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "家常茄子",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "麻婆豆腐",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
    },
    {
      name: "干锅包菜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
  grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "红烧素鸡",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
    },
    {
      name: "番茄炒鸡蛋",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
    },
    {
      name: "韭菜炒鸡蛋",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "蒜蓉茼蒿",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
    },
    {
      name: "酸辣土豆丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "清炒空心菜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "菠菜汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Big,
    },
    {
      name: "红烧肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "莲藕排骨汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "大丰收",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
    },
    {
      name: "鸡腿蒸南瓜",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "腐竹炒肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
    },
    {
      name: "土豆蒸排骨",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "白菜肉片豆腐汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Big,
    },
    {
      name: "宫保鸡丁",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "鱼香肉丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "水煮肉片",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "土豆腐乳烧牛腩",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "南瓜炒鸡肉",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
    },
    {
      name: "丸子汤",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Big,
    },
    {
      name: "油焖大虾",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "鱼香茄子",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "脆皮豆腐",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
    },
    {
      name: "千页豆腐干锅",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
    },
    {
      name: "山药炖排骨",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "红烧鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "木瓜牛奶西米露",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "大盘鸡",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
    },
    {
      name: "香煎黄鲫鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "糖醋里脊",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "啤酒鸭",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
    },
    {
      name: "香酥带鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "番茄汁黄焖鱼块",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "糯米藕",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Small,
    },
    {
      name: "蜜豆钵仔糕",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Small,
    },
    {
      name: "清蒸鲈鱼",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
    },
    {
      name: "红烧狮子头",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
    },
    {
      name: "剁椒鱼头",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
    },
    {
      name: "南瓜汤圆",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Big,
    },
    {
      name: "姜撞奶",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: [LittleShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Small,
    },
  ]