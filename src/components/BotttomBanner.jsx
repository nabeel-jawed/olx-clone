import React, {Component} from 'react'
import { compose } from 'redux';
import BottmBanner from '../assest/bottom-banner.png'
import './BottomBanner.css'

class LastBanner extends Component{
    render(){
        return(
            <div className="bottom_Banner">
                <img src={BottmBanner} alt="" />
                </div>
        )
    }
}

export default LastBanner;