import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './home/templates/App';
import NoFind from './utills/pages/NoFind';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//
import Test from './utills/organisms/NavHeader';
import Test2 from './utills/organisms/Footer';


class MyTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      loginedUser: {
        nickName: 'cuppar',
        userName: 'root',
        password: 'root'
      }
    }
  }

  handleLogout = () => {
    this.setState({
      login: false
    })
  }

  render() {
    return (
      <div>
        <Test
          login={this.state.login}
          user={this.state.loginedUser}
          handleLogout={this.handleLogout}
        />
        <Test2 />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/404' component={NoFind} />
      {/* <Route component={App} /> */}
      <Route component={MyTest} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
