import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 const UserItem = ({user:{  login, avatar_url, html_url  }}) =>  {
    
        return (
            <div className = "card text-center" style = {{width:'20rem', height:'25rem'}}>
               <img src={avatar_url} className="card-img-top center-block " alt="..." style = {{width:'20rem', height:'15rem'}} />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <Link to={`/user/${login}`} className="btn btn-primary"> More Info
                    </Link>
                </div> 
            </div>
        )
   
}

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}

export default UserItem
