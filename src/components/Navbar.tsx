import React from "react";
import "./Navbar.css"
import {Page} from "../types/PageType";
import {Link} from "react-router-dom";
import logo from "../assets/SeekerOrlando.svg";

interface NavbarProps {
    page: Page
}
function renderPageName(linkPage: Page, currentPage: Page) {
    if (linkPage === currentPage) {
        return (
            <span className="bold">{linkPage}</span>
        )
    }
    return (
        <span>{linkPage}</span>
    )
}
export default function Navbar({ page }: NavbarProps) {
    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <img src={logo} alt=""/>
            </div>
            <div className="navbar-button-container">
                <Link to={"/"} className="navbar-link">
                    <div className="navbar-link-text">
                        {renderPageName(Page.Home, page)}
                    </div>
                </Link>
                <Link to={"/about"} className="navbar-link">
                    <div className="navbar-link-text">
                        {renderPageName(Page.About, page)}
                    </div>
                </Link>
                <Link to={"/signup"} className="navbar-link">
                    <div className="navbar-link-text">
                        {renderPageName(Page.SignUp, page)}
                    </div>
                </Link>
                <Link to={"/signup"} className="navbar-link">
                    <div className="navbar-link-text">
                        {renderPageName(Page.FAQ, page)}
                    </div>
                </Link>
            </div>
        </div>
    );
};