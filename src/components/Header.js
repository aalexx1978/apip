import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../logo.png'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img alt="logo" className="App-logo" src={logo}/>
                            Mobile</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}

export default Header;