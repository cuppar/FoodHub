import img8 from '../assets/images/detail_img8.png';
import img9 from '../assets/images/detail_img9.png';
import img10 from '../assets/images/detail_img10.png';
import img11 from '../assets/images/detail_img11.png';

const cookBookTabs = [
  {
    title: '做法',
    key: 'zf',
    itemPerPage: 2,
    items: [
      // cookBookStep
      {
        img: {
          src: img8,
          alt: img8,
        },
        description: '1、花甲在盐水中浸泡两小时。',
      },
      {
        img: {
          src: img9,
          alt: img9,
        },
        description: '2、锅内烧开水，下花甲煮一下开口。',
      },
      {
        img: {
          src: img10,
          alt: img10,
        },
        description: '3、将姜丝、蒜末放入锅中小火炒香。',
      },
      {
        img: {
          src: img11,
          alt: img11,
        },
        description: '4、加入香辣酱、生抽、老抽炒上色，调入少许淀粉水。',
      },
    ]
  },
]
export default cookBookTabs
