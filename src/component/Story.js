import React from 'react';

function Story({ img, username }) {
  return (
    <li>
      <img src={img} alt="" />
      <div>
        <p>{username}</p>
      </div>
    </li>
  );
}

export default Story;
