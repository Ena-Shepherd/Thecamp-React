import React from 'react';
import logo from '../images/logo.svg'

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" width="250" height="80" className='d-inline-block align-text-top' />
                </a>
            </div>
            </nav>
        );
    }   
}
export default Navbar;