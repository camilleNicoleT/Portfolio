import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Indubitably',
      category: 'groupProject',
      description:
        'Job seeking app for employers and contractors based solely off skills'
    },
    {
      name: 'Photographer Portfolio',
      category: 'soloProject',
      description:
        'Portfolio for a photographer using React'
    },
    {
      name: 'Maki Maku',
      category: 'groupProject',
      description:
        'Make at home dates more spontaneous with this api randomizer app'
    },
    {
      name: 'Tech Blog',
      category: 'soloProject',
      description:
        'This is a tech blog for sharing ideas and interacting with others'
    },
    
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
