import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './clicked_item.css';
import logo from '../assest/olx_logo.png'
import Login from '../components/login';
import Footer from '../components/footer'



class Clicked_item extends Component {
    render() {
        return (
            <div>

                <div className="logo__div"><Link to="/"><img src={logo} alt="alt" /></Link></div>
                <div className="clicked">
                    <div className="clicked_main">
                        <div className="clicked__image">
                            <img src="https://i.pinimg.com/originals/7f/9a/30/7f9a30eda2d8c3b0f79559d021d1302a.jpg" alt="item" />
                        </div>

                        <table>
                            <tr >
                                <td>
                                    <div className="clicked__price">
                                        <strong>RS 9,000</strong>
                                        <br />
                                        <p>Battery Charger</p>
                                        <br />
                                        <p className='padding_bottom'>Garden West, Karachi, Sindh ......... Today</p>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="clicked__sellerDes">
                                        <h4>Seller Description</h4>
                                        <p><strong>Name:</strong> Seller name</p>
                                        <p>Lorem ipsum doller sit back</p>
                                        <p>Lorem ipsum doller sit back</p>
                                        <p>Lorem ipsum doller sit back</p>
                                        <p>Lorem ipsum doller sit back</p>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>

                    <div className="details">
                        <h5>Details..</h5>
                        <div className="clicked_details_container">
                            <div className='row'>Condition</div>
                            <div className='row'>used</div>
                            <div className='row'>Type</div>
                            <div className='row'>Others</div>
                        </div>
                        <hr />
                        <h5>Description</h5>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sint adipisci necessitatibus ex nesciunt voluptatum expedita. Nesciunt, officia quibusdam accusantium sunt magnam reprehenderit totam sequi beatae ab neque aspernatur harum!


</div>
                    <div className="clicked__relatedAdd">
                        <h5>Related ads</h5>
                        <div className="relatedads_container">
                            <div className="row"><strong>ADD NUMBER 1 <br />lorem ipsum <br /> lorem ipsum</strong></div>
                            <div className="row"><strong>ADD NUMBER 2 <br />lorem ipsum <br /> lorem ipsum</strong></div>
                            <div className="row"><strong>ADD NUMBER 3 <br />lorem ipsum <br /> lorem ipsum</strong></div>
                            <div className="row"><strong>ADD NUMBER 4 <br />lorem ipsum <br /> lorem ipsum</strong></div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Clicked_item;


