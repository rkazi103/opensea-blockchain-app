import { NFTMetadata } from "@3rdweb/sdk";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GeneralDetails from "../../components/GeneralDetails";
import Header from "../../components/Header";
import ItemActivity from "../../components/ItemActivity";
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
    <div className="overflow-hidden">
      <Header />

      <div className="container-lg flex flex-col items-center text-[#e5e8eb]">
        <div className="container p-6">
          <div className="flex">
            <div className="mr-4 flex-1">
              <NFTImage selectedNft={selectedNft} />
            </div>

            <div className="ml-4 flex-[2]">
              <GeneralDetails selectedNft={selectedNft} />
              {/* Purchase */}
            </div>
          </div>

          <ItemActivity />
        </div>
      </div>
    </div>
  );
};

export default Nft;
