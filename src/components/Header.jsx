import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <h1>Goth Farm Market Page Magic Fantastic Super Good Time</h1>
      <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/produce">Produce</Link>
    </div>
  );
}

export default Header;
