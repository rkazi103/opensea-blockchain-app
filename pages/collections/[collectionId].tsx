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
import { defaultCollection, MARKETPLACE_ADDRESS } from "../../lib/constants";
import client from "../../lib/client";
import { groq } from "next-sanity";
import { Collection } from "../../types/Collection";

const Collection: NextPage = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState<Collection>(defaultCollection);
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

  const fetchCollectionData = async () => {
    const query = groq`
      *[_type == "marketItems" && contractAddress == "0xdeD61eE8712fbba76164713b51FC1E37424478c3"] 
        {
          "imageUrl": profileImage.asset->url,
          "bannerImageUrl": bannerImage.asset->url,
          volumeTraded,
          createdBy,
          contractAddress,
          "creator": createdBy->userName,
          title,
          floorPrice,
          "allOwners": owners[]->,
          description
        }
    `;

    const collectionData: Collection[] = await client.fetch(query);
    setCollection(collectionData[0]);
  };

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

  useEffect(() => {
    fetchCollectionData();
  }, [collectionId]);

  console.log(collection);

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
