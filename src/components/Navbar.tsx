import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/SeekerOrlando.svg';
import { Page } from '../types/PageType';
import './Navbar.css';

interface NavbarProps {
    page: Page;
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
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <Link to={"/"} className="navbar-link">
                    <div className="navbar-button-container-image">
                        <img src={logo} alt=""/>
                    </div>
                </Link>
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
                <Link to={"/faq"} className="navbar-link">
                    <div className="navbar-link-text">
                        {renderPageName(Page.FAQ, page)}
                    </div>
                </Link>
            </div>
            <div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>
                {showMenu && (
                    <div className="dropdown-menu">
                        <Link to={"/"} className="navbar-link" onClick={toggleMenu}>
                            <div className="navbar-link-text">
                                {renderPageName(Page.Home, page)}
                            </div>
                        </Link>
                        <Link to={"/about"} className="navbar-link" onClick={toggleMenu}>
                            <div className="navbar-link-text">
                                {renderPageName(Page.About, page)}
                            </div>
                        </Link>
                        <Link to={"/faq"} className="navbar-link" onClick={toggleMenu}>
                            <div className="navbar-link-text">
                                {renderPageName(Page.FAQ, page)}
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
