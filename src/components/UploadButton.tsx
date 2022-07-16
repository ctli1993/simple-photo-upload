import { ChangeEvent } from "react";
import UploadIcon from "../../public/upload-cloud.svg";

type UploadButtonProps = {
  disabled: boolean;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: React.FunctionComponent<UploadButtonProps> = ({
  disabled,
  onUpload,
}) => {
  return (
    <button
      className={`relative w-full rounded-full bg-aukai-blue-green py-2 sm:py-4 lg:py-5 ${
        disabled
          ? "opacity-10 hover:cursor-not-allowed"
          : "hover:cursor-pointer"
      }`}
    >
      <div className="flex items-center justify-center space-x-2 text-white">
        <UploadIcon className="stoke-current h-6 w-6" />
        <div className="text-sm sm:text-xl">写真をアップロード</div>
      </div>
      <input
        multiple
        accept="image/*"
        type="file"
        className={`absolute top-0 left-0 h-full w-full opacity-0 ${
          disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
        }`}
        disabled={disabled}
        onChange={onUpload}
      />
    </button>
  );
};

export default UploadButton;
