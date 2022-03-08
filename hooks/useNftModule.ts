import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useMemo } from "react";
import { NFT_COLLECTION_ADDRESS } from "../lib/constants";

export const useNftModule = () => {
  const { provider } = useWeb3();

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  return useMemo(() => sdk?.getNFTModule(NFT_COLLECTION_ADDRESS), [sdk]);
};
