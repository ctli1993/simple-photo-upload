import Image from "next/image";

type FallbackImageProps = {
  isLargeFallback: boolean;
};

const FallbackImage: React.FunctionComponent<FallbackImageProps> = ({
  isLargeFallback,
}) => {
  if (isLargeFallback) {
    return <div className="col-span-3 row-span-2 rounded bg-gray-200" />;
  } else {
    return <div className="rounded bg-gray-200" />;
  }
};

export default FallbackImage;
