import xljc from '../assets/images/xljc_banner_1200-400.png';
import schg from '../assets/images/schg_banner_1200-400.png';
import rbss from '../assets/images/rbss_banner_1200-400.png';
import routes from './routes';

const banners = [
  {
    title: '香辣鸡翅',
    src: xljc,
    path: routes.home.path,
  },
  {
    title: '四川火锅',
    src: schg,
    path: routes.chinese_food.path,
  },
  {
    title: '日本寿司',
    src: rbss,
    path: routes.foreign_food.path,
  },
]
export default banners