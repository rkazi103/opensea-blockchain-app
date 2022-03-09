import { NFTMetadata } from "@3rdweb/sdk";
import { NextComponentType, NextPageContext } from "next";
import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

type NFTImageProps = {
  selectedNft: NFTMetadata | undefined;
};

const NFTImage: NextComponentType<NextPageContext, {}, NFTImageProps> = ({
  selectedNft,
}) => {
  return (
    <div>
      <div className="rounded-t-lg border border-[#151c22] bg-[#303339] p-2">
        <div className="flex items-center">
          <IoMdSnow />
          <div className="flex flex-1 items-center justify-end">
            <AiOutlineHeart />
            <span className="ml-2">2.3K</span>
          </div>
        </div>
      </div>

      <div>
        <img src={selectedNft?.image} />
      </div>
    </div>
  );
};

export default NFTImage;
