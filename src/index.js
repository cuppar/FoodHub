import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './home/templates/App';
import NoFind from './utills/pages/NoFind';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//
import Test from './utills/molecules/SearchInNav';
import logo from './utills/assets/images/weibo.png';


class MyTest extends React.Component {
  handleSearchTextChange = (searchText) => {
    console.log('searchText', searchText)
  }

  render() {
    return (
      <Test handleSearchTextChange={this.handleSearchTextChange} />
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/404' component={NoFind} />
      {/* <Route component={App} /> */}
      <Route render={() => (
        <MyTest />
      )} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
