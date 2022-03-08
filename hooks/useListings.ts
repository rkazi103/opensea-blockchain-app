import { useWeb3 } from "@3rdweb/hooks";
import { AuctionListing, DirectListing, ThirdwebSDK } from "@3rdweb/sdk";
import { useEffect, useMemo, useState } from "react";
import { MARKETPLACE_ADDRESS } from "../lib/constants";

export const useListings = () => {
  const { provider } = useWeb3();
  const [listings, setListings] = useState<(AuctionListing | DirectListing)[]>(
    []
  );

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  const marketplaceModule = useMemo(() => {
    return sdk?.getMarketplaceModule(MARKETPLACE_ADDRESS);
  }, []);

  useEffect(() => {
    (async () => {
      if (marketplaceModule)
        setListings(await marketplaceModule.getAllListings());
    })();
  }, []);

  return listings;
};
