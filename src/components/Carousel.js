import { useState } from 'react';

const Carousel = ({ images = [] }) => {
  const [position, setPosition] = useState(0);  

  const handleClick = (event) => {
    setPosition(event.target.attributes.getNamedItem('position').value);
  };

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={images[position]}
        alt="Product"
      />
      <div className="carousel__selector">
        {images?.map((_, index) => (
          <span
            className="carousel__position"
            key={index}
            onClick={handleClick}
            position={index}
          >
            {index === Number(position) ? '● ' : '○ '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
