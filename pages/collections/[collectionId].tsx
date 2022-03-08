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
import client from "../../lib/client";
import { groq } from "next-sanity";
import { Collection } from "../../types/Collection";
import Header from "../../components/Header";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

const Collection: NextPage = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState<Collection | null>(null);
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
    <div className="overflow-hidde">
      <Header />
      <div className="flex h-[20vh] w-screen items-center justify-center overflow-hidden">
        <img
          className="w-full object-cover"
          src={
            collection?.bannerImageUrl
              ? collection.bannerImageUrl
              : "https://via.placeholder.com/200"
          }
          alt="banner"
        />
      </div>

      <div className="w-screen px-4">
        <div className="flex w-full justify-center text-white">
          <img
            className="mt-[-4rem] h-40 w-40 rounded-full border-2 border-[#202225] bg-black object-cover"
            src={
              collection?.imageUrl
                ? collection.imageUrl
                : "https://via.placeholder.com/200"
            }
            alt="profile image"
          />
        </div>

        <div className="flex w-full justify-end text-white">
          <div className="mb-[-2rem] flex text-3xl">
            <div className="w-44">
              <div className="container flex justify-between rounded-lg border-2 px-2 text-[1.4rem]">
                <div className="my-2">
                  <CgWebsite />
                </div>
                <div className="border-r-2" />

                <div className="my-2">
                  <AiOutlineInstagram />
                </div>
                <div className="border-r-2" />

                <div className="my-2">
                  <AiOutlineTwitter />
                </div>
                <div className="border-r-2" />

                <div className="my-2">
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center text-white">
          <div className="mb-4 text-5xl font-bold">{collection?.title}</div>
        </div>

        <div className="flex w-full justify-center text-white">
          <div className="mb-4 text-lg">
            Created by{" "}
            <span className="text-[#2081e2]">{collection?.creator}</span>
          </div>
        </div>

        <div className="flex w-full justify-center text-white">
          <div className="mb-4 flex w-[44vw] justify-between rounded-xl border border-[#151b22] py-4">
            <div className="w-1/4">
              <div className="flex w-full items-center justify-center text-3xl font-bold">
                {nfts.length}
              </div>
              <div className="mt-1 w-full text-center text-lg">items</div>
            </div>

            <div className="w-1/4">
              <div className="flex w-full items-center justify-center text-3xl font-bold">
                {collection?.allOwners ? collection.allOwners.length : ""}
              </div>

              <div className="mt-1 w-full text-center text-lg">owners</div>
            </div>

            <div className="w-1/4">
              <div className="flex w-full items-center justify-center text-3xl font-bold">
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className="mr-2 h-6"
                />
                {collection?.floorPrice}
              </div>

              <div className="mt-1 w-full text-center text-lg">floor price</div>
            </div>

            <div className="w-1/4">
              <div className="flex w-full items-center justify-center text-3xl font-bold">
                <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className="mr-2 h-6"
                />
                {collection?.volumeTraded}.5K
              </div>

              <div className="mt-1 w-full text-center text-lg">
                volume traded
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center text-white">
          <div className="w-max-1/4 mt-4 flex-wrap text-xl text-[#8a939b]">
            {collection?.description}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {/* {nfts.map((nftItem, id) => (
          <NFTCard
            key={id}
            nftItem={nftItem}
            title={collection?.title}
            listings={listings}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Collection;
