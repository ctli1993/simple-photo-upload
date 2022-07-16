import { useState } from "react";
import Image from "next/image";
import XIcon from "../../public/x.svg";
import { UploadedImageType } from "../utils/types";

type UploadedImageProps = {
  image: UploadedImageType;
  index?: number;
};

const UploadedImage: React.FunctionComponent<UploadedImageProps> = ({
  image,
  index,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      key={image.preview}
      className={`${
        index === 0
          ? "relative col-span-3 row-span-2 rounded bg-gray-200"
          : "relative rounded bg-gray-200"
      }`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {/* {hover && ( */}
      <div className="h-10 w-10 rounded-full bg-white text-aukai-blue-green">
        <XIcon className="h-5 w-5 " />
      </div>
      {/* )} */}

      <Image
        alt={`uploaded image - ${image.name}`}
        src={image.preview}
        className="rounded"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default UploadedImage;
