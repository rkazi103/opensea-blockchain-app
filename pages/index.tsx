import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
      <Head>
        <title>Opensea Blockchain App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
    </div>
  );
};

export default Home;
