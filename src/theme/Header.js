import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link to="/about">درباره</Link>
        </li>
        <li>
          <Link to="/contribution">مشارکت</Link>
        </li>
      </ul>
    </header>
  );
}
