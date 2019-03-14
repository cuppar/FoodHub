import routes from '../../utills/datas/routes';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';

const articleTabs = [
  {
    title: '公益广告',
    key: 'gygg',
    itemPerPage: 2,
    items: [
      {
        src: img4,
        path: routes.health.path,
      },
      {
        src: img5,
        path: routes.health.path,
      },
    ]
  }
]
export default articleTabs