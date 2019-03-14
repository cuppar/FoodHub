import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './home/templates/App';
import NoFind from './utills/pages/NoFind';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//
// import Test from './restaurant/templates/RestaurantPanel';
// import paginationTabs from './utills/templates/paginationTabs';
// import chineseFoodTabs from './chinese_food/datas/chineseFoodTabsData';
// import Test2 from './utills/organisms/Footer';
// import Test3 from './home/organisms/Banner';
// import Test4 from './home/templates/FoodPanelList';
// import Test5 from './home/molecules/FoodPanelTitle';
// import foodCategorys from './home/datas/foodCategorysData'
// import logo from './utills/assets/images/logo.png';



// class MyTest extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       login: false,
//       selectedKey: 'home',
//       loginedUser: {
//         nickName: 'cuppar',
//         userName: 'root',
//         password: 'root'
//       }
//     }
//   }

//   handleLogout = () => {
//     this.setState({
//       login: false
//     })
//   }

//   handleSelectedKeyChange = (newKey) => {
//     this.setState({
//       selectedKey: newKey
//     })
//   }

//   render() {
//     // let Tabs = paginationTabs(Test, chineseFoodTabs);

//     return (
//       <div>
//         {/* <Test
//           login={this.state.login}
//           user={this.state.loginedUser}
//           handleLogout={this.handleLogout}
//           selectedKey={this.state.selectedKey}
//           handleSelectedKeyChange={this.handleSelectedKeyChange}
//         />
//         <Test3 />
//         <Test4 foodCategorys={foodCategorys} />
//         <Test2 /> */}
//         <Test />
//         {/* <Test
//           // handleLogin={() => { }}
//           // handleSignUp={() => { }}
//           // handleSelectedPageChange={() => { }}
//           food={{
//             path: '/path',
//             imgSrc: logo,
//             description: {
//               title: 'title',
//               material: 'material',
//               ingredients: 'ingredients',
//               cookBook: ['1', '2']
//             }
//           }}
//         /> */}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/404' component={NoFind} />
      <Route component={App} />
      {/* <Route component={MyTest} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
