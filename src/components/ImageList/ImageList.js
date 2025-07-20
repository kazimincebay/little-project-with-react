import React from "react";
import Image from "./Image.js";
import "./ImageList.css"

const ImageList = ({ images }) => {
  const preparedImageList = images.map((image) => {
    return (<Image key={image.id} image={image}/>)
  });

  return (
    <div className="ImageListContainer">
      {preparedImageList}
    </div>
  );
};

export default ImageList;
