import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center ">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
          Our Roadmap
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
          Were excited to share our plans for the future of MetaGoblinz.
        </p>
      </div>
      <div className="mt-14">
        <div className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {/* -----------road1 */}
          <div>
            <div className="flow-root backdrop-blur-3xl  bg-opacity-10 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-900 rounded-md shadow-lg">
                    <Image
                      src="/log.png"
                      alt="Create"
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                  1. Create    <b className=" text-white animate-pulse" >(Completed).......  </b>
                </h3>
                <p className="mt-5 text-base text-slate-100">
                  Create and launch our first collection of Metagoblinz NFTs on the Ethereum blockchain.
                </p>
              </div>
            </div>
          </div>
          {/* ---------road2 */}
          <div className="mt-10 md:mt-0">
            <div className="flow-root backdrop-blur-3xl  bg-opacity-10  rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-900 rounded-md shadow-lg">
                    <Image
                      src="/log.png"
                      alt="Stake"
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium   text-white tracking-tight">
                  2. Stake  <b className=" text-white animate-pulse" >(Completed).......  </b>
                </h3>
                <p className="mt-5 text-base text-slate-100">
                  Users will be able to stake their Metagoblinz NFTs to earn rewards in Metagoblinz tokens.
                </p>
              </div>
            </div>
          </div>
          {/* road3----------------- */}
          <div className="mt-10 md:mt-0">
            <div className="flow-root  backdrop-blur-3xl  bg-opacity-100 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-900 rounded-md shadow-lg">
                    <Image
                      src="/log.png"
                      alt="Expand"
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium  text-white tracking-tight">
                  3. Mining Game  <b className=" text-red-400 animate-pulse" >(Comming soon).......  </b>
                </h3>
                <p className="mt-5 text-base text-slate-100">
                  Comming soon Create and launch our Metagoblinz Nft Mining Game
                </p>
              </div>
            </div>
          </div>
          {/* -------road4 */}
          <div className="mt-10 md:mt-0">
            <div className="flow-root  backdrop-blur-3xl  bg-opacity-100 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-purple-900 rounded-md shadow-lg">
                    <Image
                      src="/log.png"
                      alt="Expand"
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium  text-white tracking-tight">
                  4. Expand   <b className=" text-red-400 animate-pulse" >(Comming soon).......  </b>
                </h3>
                <p className="mt-5 text-base text-slate-100">
                  Expand our NFT collection and launch new staking programs to provide even more opportunities for our users.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Roadmap;