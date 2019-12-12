import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        user:PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;
        return (
            <Fragment>
                <Link to={`/`} className="btn btn-light"> Back
                </Link> 
                Hireable: { '' } 
                {hireable ? <i className='fas fa-check text-primary' /> : <i className='fas fa-times-circle text-danger' /> }
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={avatar_url} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{bio}</p>
                </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">city: {location}</li>
                    <li className="list-group-item">login info: {login}</li>
                    <li className="list-group-item">followers: {followers}</li>
                    <li className="list-group-item">following: {following}</li>
                    <li className="list-group-item">public repos: {public_repos}</li>
                    <li className="list-group-item">public gists: {public_gists}</li>
                    </ul>
                <div className="card-body">
                    <p  className="card-link">website: {blog}</p>
                    <p  className="card-link">github link: {html_url}</p>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default User
