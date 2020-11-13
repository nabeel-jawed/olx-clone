import React , { Component } from 'react';
import olx_banner from '../assest/olx_Banner.jpg';
import './Banner.css';


class Banner extends Component{
    render(){
        return(

            <div className="banner">
                <img className="banner__image" src={olx_banner } alt=""/>
            </div>
        )
    }
}


export default Banner ;