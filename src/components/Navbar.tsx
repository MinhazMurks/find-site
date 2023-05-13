import React, { useContext } from 'react';
import {PageContext} from "../App";
import {Page} from "../types/PageType";

const Navbar: React.FC = () => {
    const { page, setPage } = useContext(PageContext)!;

    return (
        <div>
            <button onClick={() => setPage(Page.Home)}>{page === Page.Home ? '[Home]' : 'Home'}</button>
            <button onClick={() => setPage(Page.About)}>{page === Page.About ? '[About]' : 'About'}</button>
            <button onClick={() => setPage(Page.SignUp)}>{page === Page.SignUp ? '[SignUpPage]' : 'SignUp'}</button>
        </div>
    );
};

export default Navbar;
