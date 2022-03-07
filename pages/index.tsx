import { useWeb3 } from "@3rdweb/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3();

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
      <Head>
        <title>Opensea Blockchain App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#3b3d42]">
          <button
            className="cursor-pointer rounded-lg border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold text-white"
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <div className="mt-4 text-center text-lg text-white">
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
