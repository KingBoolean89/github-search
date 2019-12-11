import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 const Navbar  = ({icon,title}) => {
     
    
        return (
            <nav className="navbar navbar-dark bg-primary">
                <h1>
                    <i className={icon}/>{title}
                </h1>
                <div className="" id="navbarNav">
                    <Link className="nav-link navbar-item bg-dark" to='/'>Home</Link>
                    <Link className="nav-link navbar-item bg-dark" to='/about'>About</Link>
                </div> 
            </nav>
        )
    }

Navbar.defaultProps = {
    title: 'Github Search',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon:  PropTypes.string.isRequired
}

export default Navbar
