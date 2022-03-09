import {
  AuctionListing,
  DirectListing,
  MarketplaceModule,
  NFTMetadata,
} from "@3rdweb/sdk";
import { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";

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

  return <div>Purchase</div>;
};

export default Purchase;
