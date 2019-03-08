import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="background-image" />

      <Header />
      <main>
        <div className="center-box">{children}</div>
      </main>
      <Footer />
    </Fragment>
  );
}
