import Image from "next/image";
import XIcon from "../../public/x.svg";
import { UploadedImageType } from "../utils/types";

type UploadedImageProps = {
  image: UploadedImageType;
  index?: number;
  onRemove: (preview: string) => void;
};

const UploadedImage: React.FunctionComponent<UploadedImageProps> = ({
  image,
  index,
  onRemove,
}) => {
  return (
    <div
      key={image.preview}
      className={`group relative rounded bg-gray-200 ${
        index === 0 && "col-span-3 row-span-2"
      }`}
    >
      <div
        className="absolute top-2 right-2 z-50 rounded-full bg-white p-1 text-aukai-blue-green opacity-0 hover:cursor-pointer group-hover:opacity-100"
        onClick={() => onRemove(image.preview)}
      >
        <XIcon className="h-6 w-6" />
      </div>

      <Image
        alt={`uploaded image - ${image.name}`}
        src={image.preview}
        className="z-10 rounded group-hover:opacity-50"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default UploadedImage;
