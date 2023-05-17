import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";
import "./HomePage.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import Countdown from "react-countdown";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";

export default function HomePage(): React.ReactElement {
    return (
        <div className="homepage-container">
            <Navbar page={Page.Home}></Navbar>
            <div className="homepage-body-container">

                <div>
                    <Carousel
                        autoPlay={true}
                        showStatus={false}
                        interval={3000}
                        showThumbs={false}
                        dynamicHeight={true}
                        infiniteLoop={true}
                        showIndicators={false}
                        swipeable={false}
                    >
                        <div>
                            <img src="/images/city-shot.png" alt="test"/>
                        </div>
                        <div>
                            <img src="/images/collab-city.png" alt="test"/>
                        </div>
                        <div>
                            <img src="/images/woods-crouch.png" alt="test"/>
                        </div>
                    </Carousel>
                </div>

                <div className="text-block">
                    <div className="text-body">
                        Welcome to the Orlando Scavenger Hunt, your gateway to a thrilling adventure that
                        will take you through the heart of our vibrant city! Unearth the hidden gems and
                        secret spots that lie waiting for discovery, right in the bustling streets and
                        tranquil parks of Orlando. Whether you're a local or a visitor, a group of friends
                        or a family, our scavenger hunt is designed to challenge, entertain, and surprise you.

                        It's not just about finding items on a list, it's about experiencing Orlando in a new
                        and exciting way. Ready to uncover the magic? Join us and embark on a journey of discovery
                        and fun!
                    </div>
                </div>

                <div className="clock-container">
                    <div className="countdown-container">
                        <Countdown date={new Date(1692823866000)} />
                    </div>
                    <div className="clock-text">
                        until the next one
                    </div>
                </div>

                <div className="text-block">
                    <ol>
                        <li>
                            <div>
                                <span>Sign Up</span>
                                <span>Register your team (2-6 people) by completing the form from the link below. Don’t have a team? No problem! We can help you join a group.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Get Your Clues</span>
                                <span>On the day of the hunt, you'll receive the location of the first clue. Each clue will lead you to a different location within Orlando. When you start the first clue, send as text and your time will begin!</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Solve and Search</span>
                                <span>Use your creativity, teamwork, and adventurous spirit to solve each clue. You'll be hunting for specific landmarks, art, oddities, and hidden treasures throughout the city.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Record Your Findings</span>
                                <span>Take a photo or video of each found item or completed task and upload it and send an text! Once you reach the end, your time will be recorded! Winners will be announced approximately 1 week after all teams have finished.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Stay Safe</span>
                                <span>Remember to respect each location and follow all local laws and guidelines. Safety and respect for our city are paramount.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Have Fun!</span>
                                <span>This is more than just a game, it's a chance to learn, explore, and create unforgettable memories. Enjoy the thrill of the hunt and happy exploring!</span>
                            </div>
                        </li>
                    </ol>
                </div>
                <TestimonialCarousel></TestimonialCarousel>
                <div className="call-to-action-container">
                    <span>Don't Miss Out on the Fun! Start Your Hunt Today!</span>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSezJcXzBItF15XMW2lDHQZVb6j7pz0z96AzVtGTZO_hlFuRtQ/viewform?usp=sf_link">
                        <div className="call-to-action-button">
                            <span>Sign Up for the next one!</span>
                        </div>
                    </a>
                </div>
                <div className="footer-container">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
