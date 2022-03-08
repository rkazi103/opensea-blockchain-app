import { useWeb3 } from "@3rdweb/hooks";
import { NFTMetadata, ThirdwebSDK } from "@3rdweb/sdk";
import { useEffect, useMemo, useState } from "react";

export const useNfts = (collectionId: string) => {
  const { provider } = useWeb3();
  const [nfts, setNfts] = useState<NFTMetadata[]>([]);

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  const nftModule = useMemo(() => sdk?.getNFTModule(collectionId), [sdk]);

  useEffect(() => {
    (async () => {
      if (nftModule) setNfts(await nftModule.getAll());
    })();
  }, [nftModule]);

  return nfts;
};
