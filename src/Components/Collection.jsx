import React from 'react';

function Collection({ title, images }) {
  return (
    <div className="collection">
      <img src={images[0]} alt="Item" className="collection__big" />
      <div className="collection__bottom">
        <img src={images[1]} alt="Item" className="collection__mini" />
        <img src={images[2]} alt="Item" className="collection__mini" />
        <img src={images[3]} alt="Item" className="collection__mini" />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default Collection;
