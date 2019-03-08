import React, { useEffect, useState, Fragment } from 'react';

export default function Main() {
  const [image, setImage] = useState(null);
  const [imageEntered, setImageEntered] = useState(false);

  useEffect(() => {
    if (image) console.dir(image);
  }, [image]);

  const handleDragEnter = e => {
    console.dir(e.target);
    e.stopPropagation();
    e.preventDefault();
    setImageEntered(true);
  };

  const handleDragLeave = e => {
    console.dir(e.target);
    e.stopPropagation();
    e.preventDefault();
    setImageEntered(false);
  };

  const handleDropFile = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    return false;
  };

  const handleImageChange = ({ target }) => {
    // target.files[0];

    const reader = URL.createObjectURL(target.files[0]);

    setImage(reader);

    document.querySelector(
      '.background-image'
    ).style.background = `url(${reader}) center center`;
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div
      id="dropzone"
      className={imageEntered ? 'file-inside' : ''}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDropFile}
    >
      {!image ? (
        <Fragment>
          <p className="hint">
            تصویر مورد نظر خود را انتخاب کرده یا به این صفحه بکشید.
          </p>
          <label
            htmlFor="image"
            className={image ? 'for-save-image' : 'for-select-image'}
          >
            انتخاب تصویر
            <input
              accept="image/jpeg"
              onChange={handleImageChange}
              type="file"
              name="image"
              id="image"
            />
          </label>
        </Fragment>
      ) : (
        <div
          className="fill"
          style={{ background: `url(${image}) no-repeat center center` }}
        >
          <span onClick={removeImage}>x</span>
        </div>
      )}
    </div>
  );
}
