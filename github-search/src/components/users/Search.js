import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text:''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter a name...', 'danger');
        }
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });

    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form 
                    className = "form-group"
                    onSubmit = {this.onSubmit}>
                    <input  
                    className = "form-control" 
                    onChange = {this.onChange}
                    value = {this.state.text} type = 'text' 
                    name= 'text' 
                    placeholder = 'Search users...'/>
                    <input type="submit"
                           value= "Search" 
                           className="btn btn-primary btn-lg btn-block" 
                           Submit />
                </form>
                {showClear && (
                    <button
                    className="btn btn-light btn-lg btn-block"
                    onClick={clearUsers}>
                    Clear
                </button>
                )}
                
            </div>
        )
    }
}

export default Search
