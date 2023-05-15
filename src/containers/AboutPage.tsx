import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";
import "./AboutPage.css"
import Footer from "../components/Footer";

export default function AboutPage(): React.ReactElement {

    return (
        <div className="about-page-container">
            <Navbar page={Page.About}></Navbar>
            <div className="about-page-body-container">
                <div className="text-body-container">
                    <div className="header-container">
                        <span className="text-header left-align">About Seeker Orlando</span>
                        <div className="header-line-right"></div>
                    </div>
                    <span className="text-block-about left-align">Welcome to Seeker Orlando, your trusted guide to the heart and soul of Orlando, Florida.</span>
                </div>
                <div className="text-body-container">
                    <div className="header-container">
                        <div className="header-line-left"></div>
                        <span className="text-header right-align">Our Mission</span>
                    </div>
                    <span className="text-block-about right-align">Our journey began with a simple belief: every traveler should have the opportunity to experience Orlando beyond its world-renowned theme parks. At Seeker Orlando, we are passionate about showcasing the hidden gems of our vibrant city, from unique local businesses and stunning nature parks to diverse cultural attractions and a thriving food scene.</span>
                </div>
                <div className="text-body-container">
                    <div className="header-container">
                        <span className="text-header left-align">Our Team</span>
                        <div className="header-line-right"></div>
                    </div>
                    <span className="text-block-about left-align">Our team is made up of lifelong Orlando residents, avid travelers, and explorers who are deeply familiar with the city's history, culture, and quirks. We have personally scoured every corner of Orlando to curate the best experiences for you.</span>
                </div>
                <div className="text-body-container">
                    <div className="header-container">
                        <div className="header-line-left"></div>
                        <span className="text-header right-align">Our Approach</span>
                    </div>
                    <span className="text-block-about right-align">We're not just about sightseeing. We believe in making connections, understanding cultures, and inspiring discovery. We want you to leave Orlando with a suitcase full of unforgettable memories and a deep appreciation for our city’s diversity and dynamic spirit.</span>
                </div>
                <div className="text-body-container">
                    <div className="header-container">
                        <span className="text-header left-align">Join Us</span>
                        <div className="header-line-right"></div>
                    </div>
                    <span className="text-block-about left-align">Whether you're a first-time visitor seeking an authentic Orlando experience or a local keen on exploring hidden corners of your city, Seeker Orlando is your go-to resource. Join us on this exciting journey and discover Orlando like you've never seen it before. Welcome to Seeker Orlando – where exploration begins!</span>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
