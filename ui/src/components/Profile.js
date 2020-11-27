import React from 'react';
import { getCurrentUser } from '../services/auth.service';

const Profile = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser?.user?.name.toUpperCase()}</strong>
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser?.tokens?.access?.token.substring(0, 20)} ...{' '}
        {currentUser?.tokens?.access?.token.substr(currentUser?.tokens?.access?.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser?.user?._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser?.user?.email}
      </p>
    </div>
  );
};

export default Profile;
