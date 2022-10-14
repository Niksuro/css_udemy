import ImageNextjs from "next/image";
import { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

const NextImage = ({ src, alt, title }: ImageData) => {
  const [srcImage, setSrcImage] = useState(src);
  return (
    <ImageNextjs
      src={srcImage}
      placeholder={"blur"}
      blurDataURL="/images/error-image.svg"
      onError={() => setSrcImage("/images/error-image.svg")}
      alt={alt ?? "error-image"}
      title={title ?? "error-image"}
      layout="fill"
    />
  );
};

export default NextImage;
