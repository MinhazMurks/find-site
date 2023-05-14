import React from 'react';
import Navbar from "../components/Navbar";
import {Page} from "../types/PageType";

export default function FAQPage(): React.ReactElement {

    return (
        <div>
            <Navbar page={Page.About}></Navbar>
            <h2>About Page</h2>
        </div>
    );
}
