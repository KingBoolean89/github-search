import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });

    }

    render() {
        return (
            <form 
                className = "form-group"
                onSubmit = {this.onSubmit}>
                <input  
                className = "form-control" 
                onChange = {this.onChange}
                value = {this.state.text} type = 'text' 
                name= 'text' 
                placeholder = 'Search users...'/>
                <input type="submit"  value= "Search" className="btn btn-primary btn-sm" Submit />
            </form>
        )
    }
}

export default Search
