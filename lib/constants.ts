import { Collection } from "../types/Collection";

export const NFT_COLLECTION_ADDRESS =
  "0xdeD61eE8712fbba76164713b51FC1E37424478c3";

export const MARKETPLACE_ADDRESS = "0x92f8d46AB1634dDE43F7Ec60c49e25F3639F517e";

export const defaultCollection: Collection = {
  allOwners: [],
  bannerImageUrl: "",
  contractAddress: "",
  createdBy: {
    _ref: "",
    _type: "",
  },
  creator: "",
  description: "",
  floorPrice: 0,
  imageUrl: "",
  title: "",
  volumeTraded: 0,
};
