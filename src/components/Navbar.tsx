import React from "react";
import "./Navbar.css"
import {Page} from "../types/PageType";
import {Link} from "react-router-dom";

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
            <Link to={"/"} className="navbar-link">
                <div>
                    {renderPageName(Page.Home, page)}
                </div>
            </Link>
            <Link to={"/about"} className="navbar-link">
                <div>
                    {renderPageName(Page.About, page)}
                </div>
            </Link>
            <Link to={"/signup"} className="navbar-link">
                <div>
                    {renderPageName(Page.SignUp, page)}
                </div>
            </Link>
        </div>
    );
};