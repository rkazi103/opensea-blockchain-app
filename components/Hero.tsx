import type { NextComponentType } from "next";

const Hero: NextComponentType = () => {
  return (
    <div className="relative bg-black">
      <div className="before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-red-500 before:bg-[url('https://lh3.googleusercontent.com/cZHLd-BI6teXHbyjmQmhX7zfjnCwFnvcpsvL4GOThTffvZcZbfUIIjgU6E-GnMkfPT56Gq3XBuDdH_9fgQyDet6FgLNesZYRVxzrXy4=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur before:content-['']">
        <div className="relative flex h-screen flex-wrap items-center justify-center">
          <div className="w-1/2">
            <div className="relative text-[46px] font-semibold text-white">
              Discover, collect, and sell extraordinary NFTs
            </div>

            <div className="container-[400px] mt-[0.8rem] mb-[2.5rem] text-2xl text-[#8a939b]">
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>

            <div className="flex">
              <button className="hero-button bg-[#2181e2] hover:bg-[#42a0ff]">
                Explore
              </button>

              <button className="hero-button">Create</button>
            </div>
          </div>

          <div className="rounded-[3rem]">
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/cZHLd-BI6teXHbyjmQmhX7zfjnCwFnvcpsvL4GOThTffvZcZbfUIIjgU6E-GnMkfPT56Gq3XBuDdH_9fgQyDet6FgLNesZYRVxzrXy4=s550"
              alt=""
            />

            <div className="flex h-20 items-center rounded-b-lg bg-[#313338] p-4 text-white">
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/hP96CgF_s98bk2eWdaJCcQmSymvxtBzbVzvuCY1s1hGeuK4SVygOY4QDVIMRHZFMB9OnVD6qATZ1_319DOUJhIrfYcl_g_qt6757=s80"
                alt=""
              />
              <div className="ml-4 flex flex-col justify-center">
                <div>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51082641443820473803318409807995596753001585459316189646274989688412379807745"
                >
                  EbukaMordi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
