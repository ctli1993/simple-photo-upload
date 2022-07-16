import { useCallback, useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { MAX_IMAGES_NUMBER } from "../src/utils/constant";
import { UploadedImageType } from "../src/utils/types";
import FallbackImage from "../src/components/FallbackImage";
import UploadedImage from "../src/components/UploadedImage";
import UploadButton from "../src/components/UploadButton";

const Home: NextPage = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImageType[]>([]);

  const handleUploadImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length < 1) {
      return;
    }

    const newFiles = Array.from(e.target.files).map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setUploadedImages((existingFiles) => {
      if (existingFiles.length === 0) {
        return newFiles.slice(0, 4);
      } else {
        return [...existingFiles, ...newFiles].slice(0, 4);
      }
    });
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center overflow-y-auto bg-blue-50 p-6">
      <div className="h-3/4 w-full font-bold sm:w-5/6 lg:h-[95%] lg:w-3/4 xl:w-[45%]">
        <div className="mb-2 text-xl">
          內観写真 (保管場所の様子かわがるもの)
        </div>
        <div className="grid h-5/6 grid-cols-3 grid-rows-3 gap-4">
          {uploadedImages.map((image, index) => (
            <UploadedImage key={image.preview} image={image} index={index} />
          ))}
          {Array.from(Array(MAX_IMAGES_NUMBER - uploadedImages.length)).map(
            (_, index) => (
              <FallbackImage
                key={index}
                isLargeFallback={uploadedImages.length === 0 && index === 0}
              />
            )
          )}
        </div>
        <div className="mt-4 w-1/2">
          <UploadButton
            disabled={uploadedImages.length === 4}
            onUpload={handleUploadImages}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
