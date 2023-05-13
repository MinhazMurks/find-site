import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import Navbar from './components/Navbar';
import HomePage from './containers/HomePage';
import { Page } from './types/PageType';
import AboutPage from "./containers/AboutPage";
import SignUpPage from "./containers/SignUpPage";

type PageContextType = {
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
};

export const PageContext = createContext<PageContextType | undefined>(undefined);

export default function App(): React.ReactElement {
  const [page, setPage] = useState(Page.Home);

  return (
      <PageContext.Provider value={{ page, setPage }}>
        <Navbar />
        {/* Depending on the value of 'page', you can decide which component to render here */}
        {page === Page.Home && <HomePage />}
        {page === Page.About && <AboutPage />}
        {page === Page.SignUp && <SignUpPage />}
      </PageContext.Provider>
  );
}