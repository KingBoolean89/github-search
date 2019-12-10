import React from 'react';
import PropTypes from 'prop-types'

 const UserItem = ({user:{  login, avatar_url, html_url  }}) =>  {
    
        return (
            <div className = "card text-center" style = {{width:'20rem', height:'25rem'}}>
               <img src={avatar_url} class="card-img-top center-block " alt="..." style = {{width:'20rem', height:'15rem'}} />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <a href={html_url} class="btn btn-primary">Github Link</a>
                </div> 
            </div>
        )
   
}

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}

export default UserItem
