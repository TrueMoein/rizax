import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
