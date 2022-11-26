import React, { Component } from "react";
import "./Home.css"; 
import logo from "./logo.jpeg";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import image5 from "./image5.jpeg";
import slide1 from "./slides/slide1.jpeg"; 

class Home extends Component {
    render() {
        return (

            <div className="body">         
                
                { /* <!-- Slideshow section */ }

                <div className="slideshow">
                    <div className="image-holder">
                        <img className="slides" src={slide1}/> 
                    </div>
                { /* <!-- TODO: Make this into a slideshow.. */ }
                </div>

                { /* <!-- About Section --> */ }
                
                <div className="about">
                        <h1>Superior Service, Personalized Attention</h1>
                    <div className="service-section-content">
                        <p>
                            We started with the simple idea of bringing the best from us to you. After decades of 
                            serving our country, now we want to serve our community, however far away from us, you 
                            are. We took a fun hobby and turned it into a business, to make it easier to share our joy. 
                            We hope and pray that you enjoy your custom, hand made shirts as much as we enjoy making them.
                        </p>
                        <div className="contact-form">
                            <h2>Need A Custom Shirt?</h2>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            
            { /* <!-- Instagram Section --> */ }
                
                <div className="instagram">
                    <div className="instagram-title">
                        <h1>Explore our Instagram</h1>
                        <a href="#">@t29apparel</a>
                    </div>
                    <div className="instagram-images">
                        <img src={image1} alt="1st image broken" />
                        <img src={image2} alt="2nd image broken" />
                        <img src={image3} alt="3rd image broken" />
                        <img src={image4} alt="4th image broken" />
                        <img src={image5} alt="5th image broken" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;