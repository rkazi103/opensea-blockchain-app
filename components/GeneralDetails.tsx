import { NFTMetadata } from "@3rdweb/sdk";
import { NextComponentType, NextPageContext } from "next";
import { AiFillHeart } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { GiShare } from "react-icons/gi";

type GeneralDetailsProps = {
  selectedNft: NFTMetadata | undefined;
};

const GeneralDetails: NextComponentType<
  NextPageContext,
  {},
  GeneralDetailsProps
> = ({ selectedNft }) => {
  return (
    <div className="flex">
      <div className="mb-6 flex h-36 flex-1 flex-col justify-between">
        <div className="text-[#2081e2]">The Cool Robots</div>
        <div className="text-3xl font-extrabold">{selectedNft?.name}</div>

        <div className="flex">
          <div className="mr-4 text-[#8a939b]">
            Owned by <span className="text-[#2081e2]">mrloadsher</span>
          </div>

          <div className="flex items-center text-[#8a939b]">
            <AiFillHeart className="mr-1" /> 2.3K favorites
          </div>
        </div>
      </div>

      <div className="w-44">
        <div className="container flex justify-between rounded-lg border-2 text-[1.4rem]">
          <div className="my-2 ml-2">
            <MdRefresh />
          </div>
          <div className="border-r-2" />

          <div className="my-2">
            <RiShareBoxLine />
          </div>
          <div className="border-r-2" />

          <div className="my-2">
            <GiShare />
          </div>
          <div className="border-r-2" />

          <div className="my-2 mr-2">
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
