import Image from "next/image";
import { UploadedImageType } from "../utils/types";

type UploadedImageProps = {
  image: UploadedImageType;
  index?: number;
};

const UploadedImage: React.FunctionComponent<UploadedImageProps> = ({
  image,
  index,
}) => {
  return (
    <div
      key={image.preview}
      className={`${
        index === 0
          ? "relative col-span-3 row-span-2 rounded bg-gray-200"
          : "relative rounded bg-gray-200"
      }`}
    >
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
