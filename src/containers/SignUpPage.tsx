import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";

export default function SignUpPage(): React.ReactElement {
    return (
        <div>
            <Navbar page={Page.SignUp}></Navbar>
            <h2>Signup Page</h2>
        </div>
    );
}
