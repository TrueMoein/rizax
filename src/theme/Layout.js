import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About({ children }) {
  return (
    <Fragment>
      <div className="background-image" />

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </Fragment>
  );
}
