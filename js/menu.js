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
var Sugar = '糖';
var Beer = '啤酒';
/* 食材 */
// ---肉---
var ShreddedMeat = '肉丝';
var SlicedMeat = '肉片';
var Pork = '猪肉';
var Ribs = '排骨';
var Tenderloin = '里脊';
var MincedPork = '肉沫';
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
var Duck = '鸭肉';
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
var Potato = '土豆';
var Leek = '韭菜';
var Crowndaisy = '茼蒿';
var WaterSpinach = '空心菜';
var Spinach = '菠菜';
var LotusRoot = '莲藕';
var Pumpkin = '南瓜';
var DriedBeancurdSticks = '腐竹';
var WhiteCabbage = '白菜';
var Ball = '丸子';
var Yam = '山药';
var Pawpaw = '木瓜';
var TapiocaPudding = '西米露';
var Maize = '玉米';
var GreenBean = '豆角';
var WhiteRadish = '白萝卜';
var Carrot = '胡萝卜';
var Agaric = '木耳';
var StickyRice = '糯米';
var ChoppedChilli = '剁椒';


var commonDosing = { // 常用公共配料
  LG: [LittleShallot, Garlic], // 葱蒜
  LGG: [LittleShallot, Ginger, Garlic], // 葱姜蒜
  LGGSP: [LittleShallot, Ginger, Garlic, SichuanPepper, Pepper], // 葱姜蒜花椒辣椒
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
  SuperHard: 40, // 例：黄河大鲤鱼
}
var foodVolume = {
  Small: 10, // 例：番茄炒蛋
  Normal: 20, // 例：地三鲜
  Big: 30, // 例：水煮肉片
  SuperBig: 40, // 例：大炖菜、杂粮排骨
}

var Menu = [
    {
      name: "鸡蛋炒青豆",
      mainDosing: [GreenSoyaBean, Egg], // 主料
      otherDosing: commonDosing.LG, // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
      practice: '炒炒炒',
      id: 0,
    },
    {
      name: "青椒肉丝",
      mainDosing: [GreenPepper, ShreddedMeat], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 1,
    },
    {
      name: "家常茄子",
      mainDosing: [Eggplant], // 主料
      otherDosing: commonDosing.LG, // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 2,
    },
    {
      name: "麻婆豆腐",
      mainDosing: [BeanCurd, MincedPork], // 主料
      otherDosing: [...commonDosing.LGG, SichuanPepper, Pepper], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 3,
    },
    {
      name: "干锅包菜",
      mainDosing: [Cabbage, SlicedMeat], // 主料
      otherDosing: [...commonDosing.LGG, SichuanPepper, Pepper], // 辅料
  grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 4,
    },
    {
      name: "红烧素鸡",
      mainDosing: [Chicken], // 主料
      otherDosing: [BigShallot, Ginger, Garlic], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 5,
    },
    {
      name: "番茄炒鸡蛋",
      mainDosing: [Tomato, Egg], // 主料
      otherDosing: [...commonDosing.LG], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
      practice: '炒炒炒',
      id: 6,
    },
    {
      name: "韭菜炒鸡蛋",
      mainDosing: [Leek, Egg], // 主料
      otherDosing: [...commonDosing.LG], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 7,
    },
    {
      name: "蒜蓉茼蒿",
      mainDosing: [Crowndaisy], // 主料
      otherDosing: [MincedGarlic,LittleShallot], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Small,
      practice: '炒炒炒',
      id: 8,
    },
    {
      name: "酸辣土豆丝",
      mainDosing: [Potato], // 主料
      otherDosing: [...commonDosing.LGG, SichuanPepper, Pepper], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 9,
    },
    {
      name: "清炒空心菜",
      mainDosing: [WaterSpinach], // 主料
      otherDosing: [...commonDosing.LG], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 10,
    },
    {
      name: "菠菜汤",
      mainDosing: [Spinach], // 主料
      otherDosing: [...commonDosing.LG], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 11,
    },
    {
      name: "红烧肉",
      mainDosing: [Pork], // 主料
      otherDosing: [StarAnise, Myrcia, Cinnamon, BigShallot], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 12,
    },
    {
      name: "莲藕排骨汤",
      mainDosing: [Ribs, LotusRoot], // 主料
      otherDosing: commonDosing.Ribs, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 13,
    },
    {
      name: "土豆蒸排骨",
      mainDosing: [Ribs, LotusRoot], // 主料
      otherDosing: commonDosing.Ribs, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 14,
    },
    {
      name: "山药炖排骨",
      mainDosing: [Ribs, LotusRoot], // 主料
      otherDosing: commonDosing.Ribs, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 15,
    },
    {
      name: "大丰收",
      mainDosing: [Pumpkin, Maize, GreenBean, Ribs, Potato, Carrot], // 主料
      otherDosing: [...commonDosing.Ribs, ], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 16,
    },
    {
      name: "鸡腿蒸南瓜",
      mainDosing: [Drumstick, Pumpkin], // 主料
      otherDosing: [...commonDosing.LG], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 17,
    },
    {
      name: "腐竹炒肉",
      mainDosing: [DriedBeancurdSticks, SlicedMeat], // 主料
      otherDosing: [...commonDosing.LGG], // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 18,
    },
    {
      name: "白菜肉片豆腐汤",
      mainDosing: [WhiteCabbage, SlicedMeat, BeanCurd], // 主料
      otherDosing: [...commonDosing.LGG, SichuanPepper], // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 19,
    },
    {
      name: "宫保鸡丁",
      mainDosing: [Drumstick, BigShallot], // 主料
      otherDosing: [...commonDosing.LGG, SichuanPepper, Pepper], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 20,
    },
    {
      name: "鱼香肉丝",
      mainDosing: [Tenderloin, GreenPepper, Carrot, Agaric], // 主料
      otherDosing: [...commonDosing.LGG, Sugar], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 21,
    },
    {
      name: "水煮肉片",
      mainDosing: [SlicedMeat], // 主料
      otherDosing: commonDosing.LGGSP, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 22,
    },
    {
      name: "土豆腐乳烧牛腩",
      mainDosing: [Potato, FermentedBeanCurd, Sirloin], // 主料
      otherDosing:commonDosing.LGG, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 23,
    },
    {
      name: "南瓜炒鸡肉",
      mainDosing: [Chicken, Pumpkin], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 24,
    },
    {
      name: "丸子汤",
      mainDosing: [Ball], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 25,
    },
    {
      name: "油焖大虾",
      mainDosing: [Prawn], // 主料
      otherDosing: [BigShallot, Ginger, SichuanPepper], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 26,
    },
    {
      name: "鱼香茄子",
      mainDosing: [Pork, Eggplant], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 27,
    },
    {
      name: "脆皮豆腐",
      mainDosing: [BeanCurd, MincedPork], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 28,
    },
    {
      name: "干锅千页豆腐",
      mainDosing: [QianYeTofu, SlicedMeat], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Normal,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 29,
    },
    {
      name: "红烧鱼",
      mainDosing: [FishCube], // 主料
      otherDosing: commonDosing.LGGSP, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 30,
    },
    {
      name: "木瓜牛奶西米露",
      mainDosing: [Pawpaw, TapiocaPudding], // 主料
      otherDosing: [Sugar, Milk], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 31,
    },
    {
      name: "大盘鸡",
      mainDosing: [Chicken], // 主料
      otherDosing: commonDosing.LGGSP, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 32,
    },
    {
      name: "香煎黄鲫鱼",
      mainDosing: [Crucian], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 33,
    },
    {
      name: "糖醋里脊",
      mainDosing: [Tenderloin], // 主料
      otherDosing: [...commonDosing.LGG, Sugar], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 34,
    },
    {
      name: "啤酒鸭",
      mainDosing: [Duck], // 主料
      otherDosing: [...commonDosing.LGGSP, Beer], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.SuperBig,
      practice: '炒炒炒',
      id: 35,
    },
    {
      name: "香酥带鱼",
      mainDosing: [Hairtail], // 主料
      otherDosing: [...commonDosing.LGG], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 36,
    },
    {
      name: "番茄汁黄焖鱼块",
      mainDosing: [FishCube, Tomato], // 主料
      otherDosing: [...commonDosing.LGG], // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 37,
    },
    // {
    //   name: "糯米藕",
    //   mainDosing: [LotusRoot, StickyRice], // 主料
    //   otherDosing: [Sugar], // 辅料
    //   grade: foodGrade.Hard,
    //   volume: foodVolume.Small,
    //   practice: '炒炒炒',
    //   id: 38,
    // },
    // {
    //   name: "蜜豆钵仔糕",
    //   mainDosing: ['粘米粉', '木薯淀粉'], // 主料
    //   otherDosing: [Sugar], // 辅料
    //   grade: foodGrade.Hard,
    //   volume: foodVolume.Small,
    //   practice: '炒炒炒',
    //   id: 39,
    // },
    {
      name: "清蒸鲈鱼",
      mainDosing: [Bass], // 主料
      otherDosing: commonDosing.LGG, // 辅料
      grade: foodGrade.Easy,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 40,
    },
    {
      name: "红烧狮子头",
      mainDosing: [Pork], // 主料
      otherDosing: commonDosing.LGGSP, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Normal,
      practice: '炒炒炒',
      id: 41,
    },
    {
      name: "剁椒鱼头",
      mainDosing: [FishHead, ChoppedChilli], // 主料
      otherDosing: commonDosing.LGGSP, // 辅料
      grade: foodGrade.Hard,
      volume: foodVolume.Big,
      practice: '炒炒炒',
      id: 42,
    },
    // {
    //   name: "南瓜汤圆",
    //   mainDosing: [Pumpkin, SweetDumplings], // 主料
    //   otherDosing: [''], // 辅料
    //   grade: foodGrade.Easy,
    //   volume: foodVolume.Big,
    //   practice: '炒炒炒',
    //   id: 43,
    // },
    // {
    //   name: "姜撞奶",
    //   mainDosing: [Ginger, Milk], // 主料
    //   otherDosing: [''], // 辅料
    //   grade: foodGrade.Hard,
    //   volume: foodVolume.Small,
    //   practice: '炒炒炒',
    //   id: 44,
    // },
  ]