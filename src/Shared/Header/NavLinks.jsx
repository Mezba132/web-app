import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class navlinks extends Component {
    componentDidMount() {
        console.log('[NavLinks.jsx] componentDidMount')
    }

    render() {
        return (
            <div className="nav-links">
                <ul>
                    <li>
                        <a href='/' className="active">Profile</a>
                    </li>
                    <li>
                        <a href='/'>Notification</a>
                    </li>
                    <li>
                        <a href='/'>Upload</a>
                    </li>
                </ul>
            </div>

        );
    }
}

export default navlinks;