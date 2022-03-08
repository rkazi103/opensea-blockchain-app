import { User } from "./User";

export interface Collection {
  allOwners: User[];
  bannerImageUrl: string;
  contractAddress: string;
  createdBy: CreatedBy;
  creator: string;
  description: string;
  floorPrice: number;
  imageUrl: string;
  title: string;
  volumeTraded: number;
}

export interface CreatedBy {
  _ref: string;
  _type: string;
}
