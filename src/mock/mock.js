import Mock from 'mockjs'

var products1 = [{
  url: require('../assets/products/unique_1.jpg'),
  name: '女装 华夫格圆领T恤(七分袖)409 409',
  price: 99,
  express: '7.00',
  paid: 1520,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
},
{
  url: require('../assets/products/unique_2.jpg'),
  name: '男装 束脚运动裤(棉质) 409733 优衣库UNIQLO',
  price: 99,
  express: '7.00',
  paid: 7752,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
},
{
  url: require('../assets/products/unique_3.jpg'),
  name: '女装U 圆领T恤(短袖) 406456 优衣库UNIQLO',
  price: 59,
  express: '7.00',
  paid: 32074,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
},
{
  url: require('../assets/products/unique_4.jpg'),
  name: '男装/女装 袋装圆领T恤(短袖) 404133 优衣库UNIQLO',
  price: 39,
  express: '7.00',
  paid: 47194,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]

},
{
  url: require('../assets/products/unique_5.jpg'),
  name: '男装 快干弹力松紧短裤 404214 优衣库UNIQLO',
  price: 79,
  express: '7.00',
  paid: 25266,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
},
{
  url: require('../assets/products/unique_6.jpg'),
  name: '男装/女装 (UT) DPJ MICKEY ART印花T恤(短袖) 404938 优衣库',
  price: 79,
  express: '7.00',
  paid: 4013,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
},
{
  url: require('../assets/products/unique_7.jpg'),
  name: '男装/女装  (UT) JUMP 50th印花T恤(短袖) 413665 优衣库UNIQLO',
  price: 79,
  express: '7.00',
  paid: 10433,
  location: '上海',
  owner: '优衣库官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '01乳白色',
    '03灰色',
    '08深灰色',
    '09黑色',
    '32深米色',
    '36褐色',
    '56橄榄色',
    '69藏青色'
  ]
}
]
var products2 = [{
  url: require('../assets/products/adidas_1.png'),
  name: 'adidas 阿迪达斯 三叶草 男女 SUPERSTAR 经典鞋 CM8082',
  price: 559,
  express: '10.00',
  paid: 2912,
  location: '江苏苏州',
  owner: 'adidas官方旗舰店',
  sizes: [
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44'

  ],
  colors: [
    '01乳白色'
  ]
},
{
  url: require('../assets/products/adidas_2.png'),
  name: '阿迪达斯adidas 官方 训练 男子 针织长裤 黑 AB6066',
  price: 200,
  express: '0.00',
  paid: 1326,
  location: '江苏苏州',
  owner: 'adidas官方旗舰店',
  sizes: [
    '150/76A/XS',
    '155/80A/S',
    '160/84A/M',
    '170/100A/L',
    '175/100A/XL',
    '180/120A/XXL'
  ],
  colors: [
    '09黑色'
  ]
},
{
  url: require('../assets/products/adidas_3.png'),
  name: '阿迪达斯adidas 官方 三叶草 男女 ZX 700 经典鞋',
  price: 216,
  express: '0.00',
  paid: 3754,
  location: '江苏苏州',
  owner: 'adidas官方旗舰店',
  sizes: [
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44'

  ],
  colors: [
    '01乳白色',
    '09黑色'
  ]
},
{
  url: require('../assets/products/adidas_4.png'),
  name: '阿迪达斯adidas 官方 neo 男子 CF ADVANTAGE CL 休闲鞋',
  price: 201,
  express: '0.00',
  paid: 3784,
  location: '江苏苏州',
  owner: 'adidas官方旗舰店',
  sizes: [
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44'

  ],
  colors: [
    '01乳白色',
    '09黑色'
  ]
}
]
var url = require('url')
Mock.mock('/user1', 'get', function () {
  return Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
})
// 处理post请求
Mock.mock('/regIn', 'post', function () {
  return true
})
Mock.mock('/loginIn', 'post', function (options) {
  return {
    isLogin: true,
    // 获取post传过来的参数.options，里面有url、type 和 body 三个属性
    userInfo: JSON.parse(options.body)
  }
})
// 处理get请求
Mock.mock(/\/searchResult/, 'get', function (options) {
  // 用node的解析方法
  var params = url.parse(options.url, true).query
  // 用原生的解析方法
  // var params = decodeURI(options.url).slice(options.url.indexOf('?')+1);
  if (params.searchKey === '优衣库') {
    return {
      products: products1,
      searchKey: params.searchKey
    }
  }
  if (params.searchKey === 'adidas') {
    return {
      products: products2,
      searchKey: params.searchKey
    }
  }
})
