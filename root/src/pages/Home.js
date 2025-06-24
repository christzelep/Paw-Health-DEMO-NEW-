import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Καλώς ήρθατε!</h1>
      <nav>
        <Link to="/about">Πληροφορίες</Link>
      </nav>
      <p>Αυτή είναι η αρχική σελίδα</p>
    </div>
  );
}

export default Home;
