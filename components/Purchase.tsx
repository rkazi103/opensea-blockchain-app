import {
  AuctionListing,
  DirectListing,
  MarketplaceModule,
  NFTMetadata,
} from "@3rdweb/sdk";
import { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiTag } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";

type PurchaseProps = {
  isListed: string;
  selectedNft: NFTMetadata | undefined;
  listings: (AuctionListing | DirectListing)[];
  marketplaceModule: MarketplaceModule | undefined;
};

const Purchase: NextComponentType<NextPageContext, {}, PurchaseProps> = ({
  isListed,
  selectedNft,
  listings,
  marketplaceModule,
}) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState<
    AuctionListing | DirectListing | undefined
  >();
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (!listings || isListed === "false") return;
    (async () => {
      setSelectedMarketNft(
        listings.find(marketNft => marketNft.asset?.id === selectedNft?.id)
      );
    })();
  }, [selectedNft, listings, isListed]);

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return;

    setEnableButton(true);
  }, [selectedMarketNft, selectedNft]);

  const confirmPurchase = () =>
    toast.success(`Purchase successful!`, {
      style: {
        background: "#04111d",
        color: "#fff",
      },
    });

  const buyItem = async (listingId: string, quantityDesired: number) => {
    await marketplaceModule
      ?.buyoutDirectListing({
        listingId: listingId,
        quantityDesired: quantityDesired,
      })
      .catch(error => console.error(error));

    confirmPurchase();
  };

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="top-center" reverseOrder={false} />

      {isListed === "true" ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedMarketNft?.id as string, 1) : null;
            }}
            className={`mr-8 flex cursor-pointer items-center rounded-lg bg-[#2081e2] py-2 px-12 hover:bg-[#42a0ff]`}
          >
            <IoMdWallet className="text-xl" />
            <div className="ml-2 text-lg font-semibold">Buy Now</div>
          </div>

          <div
            className={`mr-8 flex cursor-pointer items-center rounded-lg border border-[#151c22] bg-[#363840] py-2  px-12 hover:bg-[#4c505c]`}
          >
            <HiTag className="text-xl" />
            <div className="ml-2 text-lg font-semibold">Make Offer</div>
          </div>
        </>
      ) : (
        <div
          className={`mr-8 flex cursor-pointer items-center rounded-lg bg-[#2081e2] py-2 px-12 hover:bg-[#42a0ff]`}
        >
          <IoMdWallet className="text-xl" />
          <div className="ml-2 text-lg font-semibold">List Item</div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
