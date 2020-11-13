import React, { Component } from 'react'
import "./footer.css"


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__categories">
                    <div>
                        <h4>POPULAR CATEGORIES</h4><p>Cars</p><p>Flats for rent</p><p>Jobs</p><p>Mobile Phones</p>
                    </div>
                    <div>
                        <h4>TRENDING SEARCHES</h4><p>Bikes</p><p>Watches</p><p>Books</p><p>Pets</p>
                    </div>
                    <div>
                        <h4>ABOUT US</h4><p>About OLX Group</p><p>OLX Blog</p><p>Contact Us</p><p>OLX for Businesses</p>
                    </div>
                    <div>
                        <h4>OLX</h4><p>Help</p><p></p>Sitemap<p></p><p>Legal and Privacy information</p>
                    </div>

                </div>
                <div className="footer__footerTwo">
                    <div className="footerTwo__container">
                        <div className="center">
                            <p> <strong>Other Contries </strong> <small>India-South Africa-Indonesia</small></p>
                        </div>

                        <div className="end center">
                            <p><strong>Free Classifieds in Pakistan . © 2006-2020 OLX</strong></p>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Footer;

