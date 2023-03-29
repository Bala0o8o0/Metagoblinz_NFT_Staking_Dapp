import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Roadmap from "../components/Roadmap";
import Team from '../components/Team';
import NFTSlider from "../components/Slider";
import NFTSlider2 from "../components/Slider2";
import NFTSlider3 from "../components/Slider3";
import NFTSlider4 from "../components/Slider4";
import NFTSlider5 from "@/components/Sider5";


const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={`w-screen h-screen  bgi  overflow-hidden  `}>
      {/* Top Section */}

      <div className='m-10 flex mx-auto  flex-col gap-7 '>
        <div className="items-start animate-bounce p-4 bg-opacity-20  
        flex mt-12 mx-auto" >
          <Image
            src="/logo.png"
            alt="Logo"
            className="animate-pulse"
            width={500}
            height={92}
          />
        </div>
        <div
          className='border-2 text-slate-300 rounded-xl border-violet-900  backdrop-blur-2xl 
          overflow-hidden hover:border-t-8 mt-16  transition duration-100 transform hover:scale-110
          text-center w-auto px-2 sm:p-0 sm:w-96 mx-auto  '
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}

          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>

        </div>

        <div
          className='border-2 text-slate-300 rounded-xl border-violet-900  backdrop-blur-2xl 
          overflow-hidden hover:border-t-8   transition duration-100 transform hover:scale-110 
          text-center w-auto px-2 sm:p-0 sm:w-96 mx-auto '
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}

          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>

        </div>

        <div
          className=' border-2 text-slate-300 rounded-xl border-violet-900  backdrop-blur-2xl 
          overflow-hidden hover:border-t-8  transition duration-100 transform hover:scale-110 
          text-center w-auto px-2 sm:p-0 sm:w-96 mx-auto'
          role="button"
          onClick={() => router.push(`/game`)}
        >
          {/* Play to earn */}
          <h2 className={styles.selectBoxTitle}>Enter-Game</h2>
        </div>

        {/* ------total supply */}
        <div className="grid grid-cols-2 gap-16 mt-24 mx-auto " >
          <div className="  backdrop-blur-3xl mx-auto rounded-lg border-violet-900 border-2 shadow-2xl 
          justify-center p-4 items-center hover:transition duration-75 transform hover:scale-125">
            <div className="rounded-lg  p-2">
              <h1 className="text-3xl text-purple-500 font-bold mb-4">Tokens Total Supply</h1>
              <p className="text-2xl text-center text-white animate-pulse font-bold ">1 Quadrillion</p>
              <div className=" justify-between mt-8">
                <div className="grid grid-cols-1" >
                  <p className="text-white  font-bold text-sm uppercase">Circulating Supply</p>
                  <p className="text-lg  text-slate-400 m-2 font-bold">1 Quadrillion</p>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Burned Tokens</p>
                  <p className="text-lg  text-slate-400 m-2 font-bold">0</p>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Locked Tokens</p>
                  <p className="text-lg text-slate-400 m-2  font-bold">0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  backdrop-blur-3xl border-violet-900 overflow-hidden border-2 mx-auto 
          hover:transition duration-75 transform hover:scale-125 rounded-lg justify-center p-4 items-center">
            <div className=" rounded-lg  p-2">
              <h1 className="text-3xl font-bold text-purple-500  mb-4">NFT Total Supply</h1>
              <p className="text-3xl text-center text-white animate-pulse font-bold ">50</p>
              <div className=" justify-between mt-8">
                <div className="grid grid-cols-1" >
                  <p className="text-white font-bold text-sm uppercase">Owned by Users</p>
                  <p className="text-lg  text-slate-400 m-2 font-bold">0</p>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Available for Sale</p>
                  <p className="text-lg text-slate-400 m-2  font-bold">50</p>
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase">Burned NFTs</p>
                  <p className="text-lg text-slate-400 m-2  font-bold">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------SLIDER */}
        <div className="hidden sm:block hover:transition duration-100 transform hover:scale-95 items-center
         justify-center h-auto w-auto rounded-2xl 
        backdrop-blur-3xl 
        p-8 mx-auto mt-20  ">
          <div className="flex gap-12 ">
            <NFTSlider />
            <NFTSlider2 />
            <NFTSlider4 />
            <NFTSlider3 />
            <NFTSlider5 />
          </div>
        </div>

        {/* ------------------------ABOUT */}
        <div className="mx-auto sm:h-auto p-1  sm:w-[1100px] overflow-hidden border-[#694490] bg-black  bg-opacity-80 justify-center backdrop-blur-3xl
        backdrop-filter mt-28 rounded-xl border-[1px] hover:transition duration-75 transform hover:scale-75 flex">
          <div className="m-auto  ">
            <h1 className="text-[#955ecf]  p-4 rounded-2xl  text-5xl  font-bold text-center">ABOUT</h1>

            <div className="text-[#955ecf] text-xl p-4 mb-4 "><b className='font-black text-lg' >MetaGoblinz</b>  is a decentralized application that allows users to earn rewards
              in the form of Metagoblinz tokens by staking their ERC721 Metagoblinz NFTs.
              <br></br>
              <br></br>
              Our staking program is designed to be simple and user-friendly. To get started, all you need to do is <br /><br />
              <p className="text-slate-400 "> 1. Connect your wallet and Claim your NFTs By clicking claim button</p> <br />
              <p className="text-slate-400 ">  2. Select the NFTs you want to stake. Once your NFTs are staked, you&apos;ll start earning rewards in Metagoblinz tokens.</p>
              <br></br>
              <br></br>
              Metagoblinz tokens can be used in a variety of ways, such as buying and selling on decentralized exchanges, or participating
              in other DeFi protocols. Our goal is to create a vibrant ecosystem around our NFTs, Tokens &amp; Game where users can trade, collect,
              and earn in a decentralized and transparent way.
              <br></br>
              <br></br>
              At MetaGoblinz, we&apos;re committed to creating a sustainable and fair staking program for our users. We believe that NFTs are the
              future of digital ownership, and we&apos;re excited to be at the forefront of this movement Join us today and start earning
              rewards with your Metagoblinz NFTs!
            </div>
          </div>
        </div>
        {/* ROADMAP */}
        <Roadmap />
        {/* team----------------- */}
        <div className="max-w-xl text-center rounded-2xl hover:transition duration-100 transform hover:scale-110
          backdrop-blur-3xl p-1  border-gray-600 
        border-2 mx-auto">
          <h1 className="text-3xl p-2  font-extrabold text-white  " >TEAM</h1>

          <Team name1="B4L4"
            name2="4d1T1"
            name3="14m1L"
            position1="Web3-Developer"
            position2="Nft Artist/Designer"
            position3="Game Designer"
            image1="bala.png"
            image2="aditi.png"
            image3="tamil.png" />

        </div>
        <footer className="text-xl text-center mt-7 text-white font-bold"  >2023 Metagoblinz All Right Reserved.'Under Testing' </footer>
      </div>
    </div>
  );
};

export default Home;
