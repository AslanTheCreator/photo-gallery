import React from 'react';
import Collection from './Collection';

function Content({ collection, searchValue }) {
  return (
    <div className="content">
      {collection
        .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj) => (
          <Collection key={obj.name} title={obj.name} images={obj.photos} />
        ))}
    </div>
  );
}

export default Content;
