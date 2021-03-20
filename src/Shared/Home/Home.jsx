import React, { Component } from 'react';
import Header from "../Header/Index";
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

class home extends Component {
    componentDidMount() {
        console.log('[Home/Home.jsx] componentDidMount');
    }
    render() {
        return (
            <div>
                <Helmet>
                <title>React Social App</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Meet and Chat" />
                <meta property="og:description" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                </Helmet>
                <div className="App">
                    <Header/>
                        
                        <div className="video-player player-wrapper">
                        {/*<ReactPlayer */}
                        {/*    controls*/}
                        {/*    url='videos/POIRIER_vs_MCGREGOR.mp4' */}
                        {/*    playing={true}*/}
                        {/*/>*/}
                        </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

export default home;