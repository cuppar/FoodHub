import React, { Component } from 'react';
import './App.css';
import NavHeader from '../../utills/organisms/NavHeader'
import Footer from '../../utills/organisms/Footer'
import ContentContainer from '../../utills/templates/ContentContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      loginedUser: null,
      signUpedUsers: [],
      selectedPage: 'home'
    }
  }

  handleSignUp = (user) => {
    this.setState((preState, props) => ({
      signUpedUsers: preState.signUpedUsers.push(user)
    }))
  }

  handleLogin = (user) => {
    this.setState({
      login: true,
      loginedUser: user
    })
  }

  handleLogout = () => {
    this.setState({
      login: false,
      loginedUser: null
    })
  }

  handleSelectedPageChange = (page) => {
    this.setState({
      selectedPage: page
    })
  }

  render() {
    const {
      login,
      loginedUser,
      signUpedUsers,
      selectedPage
    } = this.state;

    return (
      <div className="App">
        <NavHeader
          login={login}
          user={loginedUser}
          selectedPage={selectedPage}
          handleSelectedPageChange={this.handleSelectedPageChange}
          handleLogout={this.handleLogout}
        />

        <ContentContainer
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          handleSelectedPageChange={this.handleSelectedPageChange}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
