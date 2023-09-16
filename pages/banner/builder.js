import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { Button, Container } from "@mui/material";
import { getDashboardLayout } from "../../src/layout/Dashboard";
const Builder = () => {
  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [result, setResult] = useState(null);
  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async (event) => {
    setSrcImg(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  function imageCropComplete(crop) {
    userCrop(crop);
  }
  async function userCrop(crop) {
    console.log(crop, image);
    if (image && crop.width && crop.height) {
      getCroppedImg(image, crop, "newFile.jpeg");
    }
  }

  const getCroppedImg = async (image, crop, filename) => {
    try {
      const canvas = document.createElement("canvas");
      console.log(image, crop);

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg", 1);
      setResult(base64Image);
      console.log(result);
    } catch (e) {
      console.log("crop the image");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(result);
  };

  return (
    <Container className="container" fluid="md">
      <h5 className="header">React Image Crop</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>
        <div>
          {srcImg && (
            <div>
              <ReactCrop
                style={{ maxWidth: "50%" }}
                src={srcImg}
                onImageLoaded={setImage}
                crop={crop}
                onChange={setCrop}
                onComplete={(c) => setCompletedCrop}
              >
                <img src={srcImg} ref={imgRef} />
              </ReactCrop>
              <Button
                className="cropButton"
                // onClick={() => imageCropComplete(crop)}
              >
                crop
              </Button>
            </div>
          )}
          {/* {Boolean(completedCrop) && (
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            />
          )} */}
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};
Builder.getLayout = getDashboardLayout;
export default Builder;
