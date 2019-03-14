import routes from '../../utills/datas/routes'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'

const healthTabs = [
  {
    title: '饮食常识',
    key: 'yscs',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '夏天到了，教你做一杯养身冷饮',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '养生水果，你知道多少？',
          imgSrc: img2,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '教你做一道既美味又营养的沙拉',
          imgSrc: img3,
        },
      },
    ]
  },
  {
    title: '瘦身美容',
    key: 'ssmr',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '瘦身美容1',
          imgSrc: img3,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '瘦身美容2',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '瘦身美容3',
          imgSrc: img2,
        },
      },
    ]
  },
  {
    title: '母婴饮食',
    key: 'myys',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '母婴饮食1',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '母婴饮食2',
          imgSrc: img2,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '母婴饮食3',
          imgSrc: img3,
        },
      },
    ]
  },
  {
    title: '食疗食补',
    key: 'slsb',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '食疗食补1',
          imgSrc: img3,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '食疗食补2',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '食疗食补3',
          imgSrc: img2,
        },
      },
    ]
  },
  {
    title: '营养手册',
    key: 'yysc',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '营养手册1',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '营养手册2',
          imgSrc: img2,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '营养手册3',
          imgSrc: img3,
        },
      },
    ]
  },
  {
    title: '健康专栏',
    key: 'jkzl',
    itemPerPage: 3,
    items: [
      {
        path: routes.health.path,
        health: {
          foodName: '健康专栏1',
          imgSrc: img3,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '健康专栏2',
          imgSrc: img1,
        },
      },
      {
        path: routes.health.path,
        health: {
          foodName: '健康专栏3',
          imgSrc: img2,
        },
      },
    ]
  },
]
export default healthTabs