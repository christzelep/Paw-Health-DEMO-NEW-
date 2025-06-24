import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h1>Σχετικά με εμάς</h1>
      <nav>
        <Link to="/">Αρχική</Link>
      </nav>
      <p>Πληροφορίες για την εφαρμογή μας</p>
    </div>
  );
}

export default About;
