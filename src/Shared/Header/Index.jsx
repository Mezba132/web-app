import React, { Component } from 'react';
import MainHeader from '../Header/MainHeader';
import Navlinks from '../Header/NavLinks';

class index extends Component {
    componentDidMount () {
        console.log('[Index.jsx] componentDidMount');
    }
    render() {
        return(
            <MainHeader>
                <nav>
                    <Navlinks/>
                </nav>
            </MainHeader>
        )
    }
}


export default index;