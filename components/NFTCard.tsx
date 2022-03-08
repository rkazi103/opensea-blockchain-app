import { AuctionListing, DirectListing, NFTMetadata } from "@3rdweb/sdk";
import type { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";

type NFTCardProps = {
  nftItem: NFTMetadata;
  title: string;
  listings: (AuctionListing | DirectListing)[];
};

const NFTCard: NextComponentType<NextPageContext, {}, NFTCardProps> = ({
  nftItem,
  title,
  listings,
}: NFTCardProps) => {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const listing = listings.find(listing => listing.asset.id === nftItem.id);

    if (listing && Boolean(listing)) {
      setIsListed(true);
      setPrice(Number(listing.buyoutCurrencyValuePerToken.displayValue));
    }
  }, [listings, nftItem]);

  return (
    <div
      className="my-10 mx-5 h-[22rem] w-[14rem] flex-auto cursor-pointer overflow-hidden rounded-2xl bg-[#303339]"
      onClick={() => {
        router.push({
          pathname: `/nfts/${nftItem.id}`,
          query: { isListed: isListed },
        });
      }}
    >
      <div className="flex h-2/3 w-full items-center justify-center overflow-hidden">
        <img
          src={nftItem.image}
          alt={nftItem.name}
          className="w-full object-cover"
        />
      </div>

      <div className="p-3">
        <div className="flex justify-between text-[#e4e8eb] drop-shadow-xl">
          <div className="flex-0.6 flex-wrap">
            <div className="text-sm font-semibold text-[#8a939b]">{title}</div>
            <div className="mt-2 text-lg font-bold">{nftItem.name}</div>
          </div>

          {isListed && (
            <div className="flex-0.4 text-right">
              <div className="font- text-sm text-[#8a939b]">Price</div>
              <div className="mt-2 flex items-center text-xl font-bold">
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className="mr-2 h-5"
                />
                {price}
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 flex w-full items-center justify-end font-bold text-[#8a939b]">
          <span className="mr-2 text-xl">
            <BiHeart />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
