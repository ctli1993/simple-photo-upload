import type { NextPage } from "next";
import UploadButton from "../src/components/UploadButton";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center overflow-y-auto bg-blue-50 p-6">
      <div className="h-3/4 w-full font-bold sm:w-5/6 lg:h-[95%] lg:w-3/4 xl:w-[45%]">
        <div className="mb-2 text-xl">
          內観写真 (保管場所の様子かわがるもの)
        </div>
        <div className="grid h-5/6 grid-cols-3 grid-rows-3 gap-4">
          <div className="col-span-3 row-span-2 rounded bg-gray-300" />
          <div className="rounded bg-gray-300" />
          <div className="rounded bg-gray-300" />
          <div className="rounded bg-gray-300" />
        </div>
        <div className="mt-4 w-1/2">
          <UploadButton onUpload={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Home;
