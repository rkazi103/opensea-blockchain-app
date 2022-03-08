import { useWeb3 } from "@3rdweb/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  AuctionListing,
  DirectListing,
  NFTMetadata,
  ThirdwebSDK,
} from "@3rdweb/sdk";
import { MARKETPLACE_ADDRESS } from "../../lib/constants";

const Collection: NextPage = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState<NFTMetadata[]>([]);
  const [listings, setListings] = useState<(AuctionListing | DirectListing)[]>(
    []
  );

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  const nftModule = useMemo(
    () => sdk?.getNFTModule(collectionId as string),
    [sdk]
  );

  const marketplaceModule = useMemo(() => {
    return sdk?.getMarketplaceModule(MARKETPLACE_ADDRESS);
  }, []);

  useEffect(() => {
    (async () => {
      if (nftModule) setNfts(await nftModule.getAll());
    })();
  }, [nftModule]);

  useEffect(() => {
    (async () => {
      if (marketplaceModule)
        setListings(await marketplaceModule.getAllListings());
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Collection
    </div>
  );
};

export default Collection;
