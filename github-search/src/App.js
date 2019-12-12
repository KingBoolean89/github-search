import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import  Navbar from './components/layout/Navbar';
import  Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import  { Component } from 'react'
import Search from './components/users/Search';
import About from './components/pages/About'


class App extends Component {

  state= {
    users:[],
    user: {},
    loading: false,
    alert: null

  }

  searchUsers =  async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data.items});
    console.log({ users:res.data.items});
  }

  getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user:res.data});
    console.log({ user:res.data});
  }

  clearUsers = () => this.setState({users:[]})

  setAlert = (msg, type) => {
    this.setState({ alert: {msg,type} });
    setTimeout(() => this.setState({alert: null}), 5000)
  };
  
  render() {
    const { users,loading, user } = this.state;
    return (
      <Router>
      <div>
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
               <Search  searchUsers={this.searchUsers} 
                 clearUsers={this.clearUsers}
                 showClear={users.length > 0 ? true : false}
                 setAlert={this.setAlert} />
                 <Users loading={loading}  users={users}/>
            </Fragment>
          )}
           /> 
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render={props => (
            <User  { ...props} getUser={this.getUser} user={user}/>
          )}/>
        </Switch>
       
        </div>
      </div>
      </Router>
    )
  }
}

export default App
