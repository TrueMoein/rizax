import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contribution">Contribution</Link>
        </li>
      </ul>
    </div>
  );
}
