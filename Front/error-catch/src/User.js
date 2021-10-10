import React from 'react';

function User({ user }) {
  // if (!user) {
  //   return null; // null checking
  // }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
    </div>
  );
}

export default User;