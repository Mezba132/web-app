import React, { Component } from 'react';
import MainHeader from '../Header/MainHeader';

class header extends Component {
    componentDidMount () {
        console.log('[Header.jsx] componentDidMount');
    }
    render() {
        return(
            <MainHeader>
                <ul className=''>
                    <li>Hello App</li>
                </ul>
            </MainHeader>
        )
    }
}


export default header;