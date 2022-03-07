import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { NFT_COLLECTION_ADDRESS } from "../lib/constants";

const Header: NextComponentType = () => {
  return (
    <header className="flex w-screen bg-[#04111d] px-[1.2rem] py-[0.8rem]">
      <Link href="/" passHref>
        <div className="flex cursor-pointer items-center">
          <Image src="/images/opensea.png" height={40} width={40} />
          <div className="ml-[0.8rem] text-2xl font-semibold text-white">
            Opensea
          </div>
        </div>
      </Link>

      <div className="w-max-[520px] mx-[0.8rem] flex flex-1 items-center rounded-[0.8rem] bg-[#363840] hover:bg-[#4c505c]">
        <div className="mx-3 text-lg font-bold text-[#8a939b]">
          <AiOutlineSearch />
        </div>

        <input
          className="h-[2.6rem] w-full border-0 bg-transparent px-2 pl-0 text-[#e6e8eb] outline-0 ring-0 placeholder:text-[#8a939b]"
          placeholder="Search items, collections, and accounts"
        />
      </div>

      <div className="flex items-center justify-end">
        <Link href={`/collections/${NFT_COLLECTION_ADDRESS}`}>
          <div className="header-item">Collections</div>
        </Link>
        <div className="header-item">Stats</div>
        <div className="header-item">Resources</div>
        <div className="header-item">Create</div>

        <div className="header-icon">
          <CgProfile />
        </div>
        <div className="header-icon">
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </header>
  );
};

export default Header;
