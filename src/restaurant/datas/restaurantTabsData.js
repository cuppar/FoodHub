import restaurant_1 from '../assets/images/restaurant_1.jpg'
import restaurant_1_1 from '../assets/images/restaurant_1_1.jpg'
import restaurant_1_2 from '../assets/images/restaurant_1_2.jpg'
import restaurant_1_3 from '../assets/images/restaurant_1_3.jpg'
import restaurant_1_4 from '../assets/images/restaurant_1_4.jpg'
import restaurant_2 from '../assets/images/restaurant_2.jpg'
import restaurant_2_1 from '../assets/images/restaurant_2_1.jpg'
import restaurant_2_2 from '../assets/images/restaurant_2_2.jpg'
import restaurant_2_3 from '../assets/images/restaurant_2_3.jpg'
import restaurant_2_4 from '../assets/images/restaurant_2_4.jpg'
import restaurant_3 from '../assets/images/restaurant_3.jpg'
import restaurant_3_1 from '../assets/images/restaurant_3_1.jpg'
import restaurant_3_2 from '../assets/images/restaurant_3_2.jpg'
import restaurant_3_3 from '../assets/images/restaurant_3_3.jpg'
import restaurant_3_4 from '../assets/images/restaurant_3_4.jpg'


let restaurantTabs = [
  {
    title: '推荐餐厅',
    id: 0,
    key: 'tjct',
    itemPerPage: 3,
    items: [
      {
        id: 0,
        img: {
          src: restaurant_1,
          path: '/restaurant/0',
          alt: restaurant_1,
        },
        description: {
          title: '胡大饭馆（簋街总店）',
          detail: '北京胡大餐饮有限公司创立于一九九九年，由当时北京簋街最大的龙虾供应商孙玉珍女士创立，北京簋街总店在短短的三年内由原来100多平米，七张餐桌的小店发展为全国连锁特色中餐厅，多年来门庭若市的排队叫号已成北京的一道亮丽夜景。',
        },
        detailImgs: [
          {
            id: 0,
            src: restaurant_1_1,
            path: '/restaurant/0',
            alt: restaurant_1_1,
          },
          {
            id: 1,
            src: restaurant_1_2,
            path: '/restaurant/0',
            alt: restaurant_1_2,
          },
          {
            id: 2,
            src: restaurant_1_3,
            path: '/restaurant/0',
            alt: restaurant_1_3,
          },
          {
            id: 3,
            src: restaurant_1_4,
            path: '/restaurant/0',
            alt: restaurant_1_4,
          },
        ]
      },
      // copy
      {
        id: 1,
        img: {
          src: restaurant_2,
          path: '/restaurant/0',
          alt: restaurant_2,
        },
        description: {
          title: '老舍茶馆（前门店）',
          detail: '北京胡大餐饮有限公司创立于一九九九年，由当时北京簋街最大的龙虾供应商孙玉珍女士创立，北京簋街总店在短短的三年内由原来100多平米，七张餐桌的小店发展为全国连锁特色中餐厅，多年来门庭若市的排队叫号已成北京的一道亮丽夜景。',
        },
        detailImgs: [
          {
            id: 0,
            src: restaurant_2_1,
            path: '/restaurant/0',
            alt: restaurant_2_1,
          },
          {
            id: 1,
            src: restaurant_2_2,
            path: '/restaurant/0',
            alt: restaurant_2_2,
          },
          {
            id: 2,
            src: restaurant_2_3,
            path: '/restaurant/0',
            alt: restaurant_2_3,
          },
          {
            id: 3,
            src: restaurant_2_4,
            path: '/restaurant/0',
            alt: restaurant_2_4,
          },
        ]
      },
      // copy
      {
        id: 2,
        img: {
          src: restaurant_3,
          path: '/restaurant/0',
          alt: restaurant_3,
        },
        description: {
          title: '南京大排档（中关村店）',
          detail: '北京胡大餐饮有限公司创立于一九九九年，由当时北京簋街最大的龙虾供应商孙玉珍女士创立，北京簋街总店在短短的三年内由原来100多平米，七张餐桌的小店发展为全国连锁特色中餐厅，多年来门庭若市的排队叫号已成北京的一道亮丽夜景。',
        },
        detailImgs: [
          {
            id: 0,
            src: restaurant_3_1,
            path: '/restaurant/0',
            alt: restaurant_3_1,
          },
          {
            id: 1,
            src: restaurant_3_2,
            path: '/restaurant/0',
            alt: restaurant_3_2,
          },
          {
            id: 2,
            src: restaurant_3_3,
            path: '/restaurant/0',
            alt: restaurant_3_3,
          },
          {
            id: 3,
            src: restaurant_3_4,
            path: '/restaurant/0',
            alt: restaurant_3_4,
          },
        ]
      },
    ]
  },
]
export default restaurantTabs
