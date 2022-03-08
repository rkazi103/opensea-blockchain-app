import { useWeb3 } from "@3rdweb/hooks";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { NFTMetadata, ThirdwebSDK } from "@3rdweb/sdk";

const Collection: NextPage = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState<NFTMetadata[]>([]);
  const [listings, setListings] = useState([]);

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  const nftModule = useMemo(
    () => sdk?.getNFTModule("0xdeD61eE8712fbba76164713b51FC1E37424478c3"),
    [sdk]
  );

  useEffect(() => {
    (async () => {
      if (!nftModule) return;
      const alllNfts = await nftModule.getAll();
      setNfts(alllNfts);
    })();
  }, [nftModule]);

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
