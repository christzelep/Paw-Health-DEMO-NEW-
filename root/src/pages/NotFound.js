import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Η σελίδα που ζητήσατε δεν βρέθηκε.</p>
      <Link to="/">Επιστροφή στην αρχική</Link>
    </div>
  );
}

export default NotFound;
