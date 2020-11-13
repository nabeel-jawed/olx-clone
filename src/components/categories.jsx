import React, { Component } from "react";
import './categories.css'
import { Link } from "react-router-dom";



class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <ul >
                   <li className="bold"> <Link to="/login">ALL CATEGORIES</Link> </li>
                        <li><Link to="#">Mobile Phones</Link></li>
                        <li><Link to="#">Cars</Link></li>
                        <li><Link to="#">Motorcycles</Link></li>
                        <li><Link to="#">House</Link></li>
                        <li><Link to="#">TV-Video-Audio</Link></li>
                        <li><Link to="#">Tablets</Link></li>
                        <li><Link to="#">Land & Plots</Link></li>
                </ul>
            </div>
        )
    }
}

export default Categories;