import { NFTMetadata } from "@3rdweb/sdk";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import NFTImage from "../../components/NFTImage";
import { useListings } from "../../hooks/useListings";
import { useMarketplaceModule } from "../../hooks/useMarketplaceModule";
import { useNftModule } from "../../hooks/useNftModule";

const Nft: NextPage = () => {
  const [selectedNft, setSelectedNft] = useState<NFTMetadata>();
  const router = useRouter();
  const listings = useListings();
  const nftModule = useNftModule();
  const marketplaceModule = useMarketplaceModule();

  useEffect(() => {
    if (!nftModule) return;

    (async () => {
      const nfts = await nftModule.getAll();
      const selectedNftItem = nfts.find(nft => nft.id === router.query.nftId);

      setSelectedNft(selectedNftItem);
    })();
  }, [nftModule]);

  return (
    <div>
      <Header />
      <NFTImage selectedNft={selectedNft} />
    </div>
  );
};

export default Nft;
