import React from "react";

function LikedPerson({person}) {
  return (
    <div className='liked-person'>
      <div className='liked-person-image'>
        <img
          src={`/images/users/${person.image}`}
          alt={`You liked ${person.name}`}
        />
      </div>
    </div>
  );
}

export default LikedPerson;
