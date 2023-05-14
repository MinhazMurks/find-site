import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";
import "./SignUpPage.css"

export default function SignUpPage(): React.ReactElement {
    return (
        <div>
            <Navbar page={Page.SignUp}></Navbar>
            <div className="under-construction">
                <span className="heading">Oh no!</span>
                <span className="subtitle">Sorry, this page does not exist yet. This site is still under construction!</span>
            </div>
        </div>
    );
}
