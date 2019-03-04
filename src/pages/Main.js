import React, { useEffect, useState } from 'react';

export default function Main() {
  const [image, setImage] = useState(null);

  const handleImageChange = ({ target }) => {
    setImage(URL.createObjectURL(target.files[0]));
  };

  return (
    <div className="center-box">
      <form action="">
        <label htmlFor="image">
          Select image
          <input
            onChange={handleImageChange}
            type="file"
            name="image"
            id="image"
          />
        </label>
        {image && <img src={image} alt="my ax" />}
      </form>
    </div>
  );
}
