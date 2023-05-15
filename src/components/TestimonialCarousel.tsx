import {Carousel} from "react-responsive-carousel";
import React from "react";
import "./TestimonialCarousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default function TestimonialCarousel() {
    return (
        <div className="testimonial-container">
            <Carousel
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                showIndicators={false}
                infiniteLoop={true}
            >
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img src="/images/Dhruv.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote"> "Our scavenger hunt in Hyderabad was an exhilarating experience! It combined the thrill of the chase with the joy of discovery, and I learned so much about my city. If you ever get a chance to participate in a city scavenger hunt, don't miss it!"</span>
                            <span className="testimonial-card-author">Dhruv</span>
                            <span className="testimonial-card-qualifier">Seeker Hyderabad</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img src="/images/Ignacio.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote"> "I had an amazing time during the scavenger hunt in Chicago. It was a unique and engaging way to explore the city, full of surprises and interesting challenges. I'm looking forward to participating in more city scavenger hunts in the future!"</span>
                            <span className="testimonial-card-author">Ignacio</span>
                            <span className="testimonial-card-qualifier">Seeker Chicago</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img src="/images/Mia.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote">"The Scavenger Hunt in Chicago was one of the most memorable experiences I've had. It was a great day filled with laughter, surprises, and bonding with friends. If you have the opportunity to participate in a city scavenger hunt, go for it!"</span>
                            <span className="testimonial-card-author">Mia</span>
                            <span className="testimonial-card-qualifier">Seeker Chicago</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img src="/images/Sara.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote">"Participating in the Chicago scavenger hunt was an absolute delight. It was more than just a game, it was an exciting journey of exploration and discovery. I uncovered so many hidden gems in the city I thought I knew so well. I highly recommend city scavenger hunts for anyone looking for a unique and fun experience."</span>
                            <span className="testimonial-card-author">Sara</span>
                            <span className="testimonial-card-qualifier">Seeker Chicago</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img  src="/images/Corey.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote">"The Chicago Scavenger Hunt was an adventure like no other. It was a unique blend of fun, discovery, and problem-solving. City scavenger hunts are a must-try activity!"</span>
                            <span className="testimonial-card-author">Corey</span>
                            <span className="testimonial-card-qualifier">Seeker Chicago</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card-container">
                    <div className="testimonial-card">
                        <div className="profile-picture">
                            <img src="/images/Susan.png" alt=""/>
                            <div className="quote-icon">
                                <img src="/quotes.svg" alt=""/>
                            </div>
                        </div>
                        <div className="testimonial-card-info">
                            <span className="testimonial-card-quote">"Taking part in the Chicago Scavenger Hunt was a blast! It was an innovative and fun way to discover hidden corners of the city while bonding with friends. I can't recommend city scavenger hunts highly enough!"</span>
                            <span className="testimonial-card-author">Susan</span>
                            <span className="testimonial-card-qualifier">Seeker Chicago</span>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}