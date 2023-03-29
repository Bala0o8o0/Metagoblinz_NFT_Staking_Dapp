import { useContract, useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Mint: NextPage = () => {
  const router = useRouter();
  const { contract, error } = useContract(nftDropContractAddress);
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  const handleClick = async () => {
    try {
      if (!contract) {
        throw new Error("Contract instance is not initialized.");
      }
      const claimResult = await contract.erc721.claim(1);
      alert(claimResult);
    } catch (error) {
      console.error(error);

    }
  };

  const handleClaimNFT = async () => {
    try {
      if (!contract) {
        throw new Error("Contract instance is not initialized.");
      }

      const claimResult = await contract.erc721.claim(1);
      toast.success("NFT Claimed!");
      router.push("/stake");

    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleWalletConnected = () => {
    toast.success('Wallet connected successfully!');
  };
  const handleWalletDisconnected = () => {
    toast.success('Wallet disconnected successfully!');
  };

  return (
    <>
      <div className="w-screen h-auto bg  ">

        <div className={`${styles.container} flex flex-col items-center`}>
          {/* ConnectWallet Button */}
          <div className="-mt-1"  >
            <button
              onClick={address ? () => {
                disconnect();
                handleWalletDisconnected();
              } : () => {
                connectWithMetamask();
                handleWalletConnected();
              }}
              className="bg-[#04030b] backdrop-filter font-semibold  border-2 border-[#2c1f60] backdrop-blur-lg
               bg-opacity-20 hover:bg-opacity-50 text-[#d8fd08]
               hover:text-[#98b200] hover:border-[#d8fd08]  py-4 px-4 rounded-lg  transition-all 
               duration-300"
            >
              {address ? `Disconnect...... (${address.slice(-4)})` : 'Connect Wallet'}
            </button>
          </div>

          {/* claim button-------------- */}
          <div className="w-auto mt-12 sm:mt-32 py-2 px-2 ] ">

            <button
              onClick={handleClaimNFT}
              className="border-2 border-[#2c1f60] bg-opacity-20 rounded-xl
               text-[#98b200] font-bold text-lg px-8 py-2 backdrop-filter 
               backdrop-blur-lg shadow-lg hover:bg-opacity-30 focus:outline-none focus:ring-2 
               focus:ring-[#98b200]"
            >
              <b className="animate-pulse" >CLAIM</b>
            </button>
            <ToastContainer
            />
          </div>

          {/* ABout card---------------------------- */}
          <div className="mt-20 sm:mt-36 px-4 py-6 w-auto border-x-2 border-[#c3ff00bb] bg-transparent bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg shadow-md relative">
            <div className="absolute inset-0 rounded-lg  border-2 border-gradient-to-r from-red-500 to-blue-500 filter blur-lg opacity-50"></div>
            <h1 className="z-10 relative text-3xl font-bold text-[#c3ff00bb] text-center">
              Welcome to  Metagoblinz NFT Staking DApp
            </h1>
            <p className="z-10 relative mt-2 font-semibold text-base text-[#4a89b8] text-center">
              Here is where you can claim & stake your MetaGoblinz NFTs and earn MetaGoblinz Tokens as rewards!
            </p>
          </div>

          <footer className="text-[#c3ff00bb] font-normal text-xs mt-10" > 2023 MetaGoblinz All Right Reserved </footer>
        </div>

      </div>


    </>
  );
};

export default Mint;



