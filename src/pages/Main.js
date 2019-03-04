import React, { useEffect, useState } from 'react';

export default function Main() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) console.dir(image);
  }, [image]);

  const handleImageChange = ({ target }) => {
    const img = URL.createObjectURL(target.files[0]);
    setImage(img);
    document.querySelector(
      '.background-image'
    ).style.background = `url(${img}) no-repeat center center`;
  };

  return (
    <div className="center-box">
      <form action="">
        <label htmlFor="image">
          Select image
          <input
            accept="image/jpeg"
            onChange={handleImageChange}
            type="file"
            name="image"
            id="image"
          />
        </label>
        {image && (
          <div
            className="fill"
            style={{ background: `url(${image}) no-repeat center center` }}
          />
        )}
      </form>
    </div>
  );
}
