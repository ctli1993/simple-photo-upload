import { ChangeEvent } from "react";
import UploadIcon from "../../public/upload-cloud.svg";

type UploadButtonProps = {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: React.FunctionComponent<UploadButtonProps> = ({
  onUpload,
}) => {
  return (
    <button className="relative w-full rounded-full bg-aukai-blue-green py-2 hover:cursor-pointer sm:py-4 lg:py-5">
      <div className="flex items-center justify-center space-x-2 text-white">
        <UploadIcon className="stoke-current h-6 w-6" />
        <div className="text-sm sm:text-xl">写真をアップロード</div>
      </div>
      <input
        multiple
        accept="image/*"
        type="file"
        className="absolute top-0 left-0 h-full w-full opacity-0 hover:cursor-pointer"
        onChange={onUpload}
      />
    </button>
  );
};

export default UploadButton;
