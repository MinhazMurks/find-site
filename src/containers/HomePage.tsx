import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";
import "./HomePage.css"
import city from "../assets/city-shot.png"
import collab from "../assets/collab-city.png"
import woods_crouch from "../assets/woods-crouch.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

export default function HomePage(): React.ReactElement {

    return (
        <div className="homepage-container">
            <Navbar page={Page.Home}></Navbar>
            <div className="homepage-body-container">

                <div>
                    <Carousel
                        autoPlay={true}
                        showStatus={false}
                        showThumbs={false}
                        dynamicHeight={true}
                        interval={1}
                        width="100%"
                    >
                        <div>
                            <img src={city} alt="test"/>
                        </div>
                        <div>
                            <img src={collab} alt="test"/>
                        </div>
                        <div>
                            <img src={woods_crouch} alt="test"/>
                        </div>
                    </Carousel>
                </div>

                <div className="text-block">
                    <div className="heading">Introduction</div>
                    <p>
                        Welcome to the Orlando Scavenger Hunt, your gateway to a thrilling adventure that
                        will take you through the heart of our vibrant city! Unearth the hidden gems and
                        secret spots that lie waiting for discovery, right in the bustling streets and
                        tranquil parks of Orlando. Whether you're a local or a visitor, a group of friends
                        or a family, our scavenger hunt is designed to challenge, entertain, and surprise you.

                        It's not just about finding items on a list, it's about experiencing Orlando in a new
                        and exciting way. Ready to uncover the magic? Join us and embark on a journey of discovery
                        and fun!
                    </p>
                </div>
                <div className="text-block">
                    <div className="heading">How it Works</div>
                    <ol>
                        <li>Sign Up: Register your team (2-6 people) online. Don’t have a team? No problem! We can help you join a group.</li>
                        <li>Get Your Clues: On the day of the hunt, you'll receive a list of riddles, puzzles, and clues via our app. Each clue will lead you to a different location within Orlando.</li>
                        <li>Solve and Search: Use your creativity, teamwork, and adventurous spirit to solve each clue. You'll be hunting for specific landmarks, art, oddities, and hidden treasures throughout the city.</li>
                        <li>Record Your Findings: Take a photo or video of each found item or completed task and upload it to the app. Be creative, the best photos might win extra points!</li>
                        <li>Stay Safe: Remember to respect each location and follow all local laws and guidelines. Safety and respect for our city are paramount.</li>
                        <li>Have Fun!: This is more than just a game, it's a chance to learn, explore, and create unforgettable memories. Enjoy the thrill of the hunt and happy exploring!</li>
                    </ol>
                </div>
                <div>
                    <p>Testimonials</p>
                </div>
                <div>
                    <p>CTA</p>
                </div>
            </div>
        </div>
    );
}
