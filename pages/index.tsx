import { useCallback, useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { MAX_IMAGES_NUMBER } from "../src/utils/constant";
import { UploadedImageType } from "../src/utils/types";
import FallbackImage from "../src/components/FallbackImage";
import UploadedImage from "../src/components/UploadedImage";
import UploadButton from "../src/components/UploadButton";

const Home: NextPage = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImageType[]>([]);
  const fallbackImagesNumber = MAX_IMAGES_NUMBER - uploadedImages.length;

  const handleUploadImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const uploadingImages = e.target.files;

    if (!uploadingImages || uploadingImages.length < 1) {
      return;
    }

    const newImages = Array.from(uploadingImages).map((image) =>
      Object.assign(image, {
        imageUrl: URL.createObjectURL(image),
      })
    );

    setUploadedImages((existingImages) => {
      if (existingImages.length === 0) {
        return newImages.slice(0, 4);
      } else {
        return [...existingImages, ...newImages].slice(0, 4);
      }
    });
  }, []);

  const handleRemove = useCallback((imageUrl: string) => {
    setUploadedImages((existingImage) =>
      existingImage.filter((image) => image.imageUrl !== imageUrl)
    );
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center overflow-y-auto bg-blue-50 p-6">
      <Head>
        <title>Simple Photo Upload App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-3/4 w-full font-bold sm:w-5/6 lg:h-[95%] lg:w-3/4 xl:w-[45%]">
        <div className="mb-2 text-xl">
          內観写真 (保管場所の様子かわがるもの)
        </div>

        <div className="grid h-5/6 grid-cols-3 grid-rows-3 gap-4">
          {uploadedImages.map((image, index) => (
            <UploadedImage
              key={image.imageUrl}
              image={image}
              index={index}
              onRemove={handleRemove}
            />
          ))}
          {[...new Array(fallbackImagesNumber)].map((_, index) => (
            <FallbackImage
              key={index}
              isLargeFallback={uploadedImages.length === 0 && index === 0}
            />
          ))}
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
