import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";
import "./FAQPage.css"
import "../App.css"
import Footer from "../components/Footer";

export default function FAQPage(): React.ReactElement {

    return (
        <div className="faq-page-container">
            <Navbar page={Page.FAQ}></Navbar>
            <div className="faq-container">
                <div className="faq-list">
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                What is Seeker Orlando?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                Seeker Orlando is a trusted guide to the heart and soul of Orlando, Florida. We provide insider tips, and expert advice to help you explore Orlando beyond the traditional tourist attractions.
                            </span>
                        </div>
                    </div>
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                Who is behind Seeker Orlando?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                Seeker Orlando is a team of lifelong Orlando residents, avid travelers, and explorers passionate about sharing the best of our city. We've personally experienced everything we recommend, ensuring you get the most authentic Orlando experience.
                            </span>
                        </div>
                    </div>
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                 I'm new to Orlando. Where should I start?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                Welcome to Orlando! We recommend starting with our scavenger hunt, which will give you an overview of what to see and do. If you need personalized recommendations, feel free to reach out to us.
                            </span>
                        </div>
                    </div>
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                Do you only feature tourist attractions in Orlando?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                While we do feature some well-known attractions, our primary focus is on showcasing hidden gems, local businesses, cultural attractions, and the vibrant food scene of Orlando. We believe in providing an in-depth and genuine understanding of our city's charm.
                            </span>
                        </div>
                    </div>
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                I'm a local. Is Seeker Orlando useful for me?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                Absolutely! Even if you've lived in Orlando for years, we're confident you'll discover something new with Seeker Orlando. Our guides can help you explore unknown corners of your city and experience Orlando in a fresh way.
                            </span>
                        </div>
                    </div>
                    <div className="faq-list-item">
                        <div className="faq-item-container">
                            <span className="marker">Q:</span>
                            <span className="question-text">
                                How can I contact Seeker Orlando for more personalized recommendations?
                            </span>
                        </div>
                        <div className="faq-item-container">
                            <span className="marker">A:</span>
                            <span className="answer-text">
                                We'd love to help you plan your perfect Orlando experience. Email us at support@seekerorlando.org or text 407-494-6802 to get in touch with us.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
