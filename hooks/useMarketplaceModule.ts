import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useMemo } from "react";
import { MARKETPLACE_ADDRESS } from "../lib/constants";

export const useMarketplaceModule = () => {
  const { provider } = useWeb3();

  const sdk = useMemo(() => {
    if (provider) return new ThirdwebSDK(provider.getSigner());
    return undefined;
  }, [provider]);

  return useMemo(() => {
    return sdk?.getMarketplaceModule(MARKETPLACE_ADDRESS);
  }, []);
};
