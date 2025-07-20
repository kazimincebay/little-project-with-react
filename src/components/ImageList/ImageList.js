import React from "react";
import "./ImageList.css"

const ImageList = ({ images }) => {
  const preparedImageList = images.map((image) => {
    return <img key={image.id} src={image.urls.small} alt="" />;
  });

  return (
    <div className="ImageListContainer">
      {preparedImageList}
    </div>
  );
};

export default ImageList;
