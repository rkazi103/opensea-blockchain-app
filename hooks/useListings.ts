import { AuctionListing, DirectListing } from "@3rdweb/sdk";
import { useEffect, useState } from "react";
import { useMarketplaceModule } from "./useMarketplaceModule";

export const useListings = () => {
  const marketplaceModule = useMarketplaceModule();
  const [listings, setListings] = useState<(AuctionListing | DirectListing)[]>(
    []
  );

  useEffect(() => {
    (async () => {
      if (marketplaceModule)
        setListings(await marketplaceModule.getAllListings());
    })();
  }, []);

  return listings;
};
