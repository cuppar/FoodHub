import zgcc from '../assets/images/zgcc_300-200.png'
import zgmc from '../assets/images/zgmc_300-200.png'
import zgyc from '../assets/images/zgyc_300-200.png'
import fgll from '../assets/images/fgll_300-200.png'
import hgll from '../assets/images/hgll_300-200.png'
import rbll from '../assets/images/rbll_300-200.png'

const foodCategorys = [
  {
    foodCategoryName: '中国菜系',
    foods: [
      {
        foodName: '中国川菜',
        path: '/chinese-food',
        imgSrc: zgcc
      },
      {
        foodName: '中国粤菜',
        path: '/chinese-food',
        imgSrc: zgyc
      },
      {
        foodName: '中国闽菜',
        path: '/chinese-food',
        imgSrc: zgmc
      },
    ]
  },
  {
    foodCategoryName: '外国菜系',
    foods: [
      {
        foodName: '日本料理',
        path: '/foreign-food',
        imgSrc: rbll
      },
      {
        foodName: '韩国料理',
        path: '/foreign-food',
        imgSrc: hgll
      },
      {
        foodName: '法国料理',
        path: '/foreign-food',
        imgSrc: fgll
      },
    ]
  },
  {
    foodCategoryName: '中国菜系2',
    foods: [
      {
        foodName: '中国川菜2',
        path: '/chinese-food',
        imgSrc: zgyc
      },
      {
        foodName: '中国粤菜2',
        path: '/chinese-food',
        imgSrc: zgcc
      },
      {
        foodName: '中国闽菜2',
        path: '/chinese-food',
        imgSrc: zgmc
      },
    ]
  },
  {
    foodCategoryName: '外国菜系2',
    foods: [
      {
        foodName: '日本料理2',
        path: '/foreign-food',
        imgSrc: hgll
      },
      {
        foodName: '韩国料理2',
        path: '/foreign-food',
        imgSrc: hgll
      },
      {
        foodName: '法国料理2',
        path: '/foreign-food',
        imgSrc: rbll
      },
    ]
  },
  {
    foodCategoryName: '中国菜系3',
    foods: [
      {
        foodName: '中国川菜3',
        path: '/chinese-food',
        imgSrc: zgmc
      },
      {
        foodName: '中国粤菜3',
        path: '/chinese-food',
        imgSrc: zgyc
      },
      {
        foodName: '中国闽菜3',
        path: '/chinese-food',
        imgSrc: zgcc
      },
    ]
  },
  {
    foodCategoryName: '外国菜系3',
    foods: [
      {
        foodName: '日本料理3',
        path: '/foreign-food',
        imgSrc: rbll
      },
      {
        foodName: '韩国料理3',
        path: '/foreign-food',
        imgSrc: fgll
      },
      {
        foodName: '法国料理3',
        path: '/foreign-food',
        imgSrc: hgll
      },
    ]
  },
]

export default foodCategorys;