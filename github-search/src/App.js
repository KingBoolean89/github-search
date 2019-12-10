import React from 'react';
import axios from 'axios';
import  Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import  { Component } from 'react'
import Search from './components/users/Search';

class App extends Component {

  state= {
    users:[],
    loading: false
  }

  // async componentDidMount(){
  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users:res.data, loading:false});
  // }

  searchUsers =  async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data.items});
    console.log({ users:res.data.items});
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Search  searchUsers={this.searchUsers}/>
        <div className="container">
          <Users loading={this.state.loading}  users={this.state.users}/>
        </div>
       
      </div>
    )
  }
}

export default App
