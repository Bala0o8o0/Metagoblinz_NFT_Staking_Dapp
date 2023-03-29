import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button, useMetamask
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { disconnect } from "process";


const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(
    contract,
    "getStakeInfo",
    address
  );
  const connectWithMetamask = useMetamask();





  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", address);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [id]);
  }

  if (isLoading) {
    return <div className="text-center text-white w-screen mt-60  rounded-full text-4xl font-extrabold 
     h-screen items-center justify-center animate-bounce" >Loading MetaGoblinz...... </div>;
  }

  function claimRewards(contract: any, contractAddress: any) {
    contract
      .call("claimRewards")
      .then(() => {
        toast.success('Rewards claimed successfully');
      })
      .catch((error: any) => {
        toast.error('You have no rewards to claim');
      });
  }

  const handleWalletConnected = () => {
    toast.success('Hoo Welcome To MetaGoblinz!');
  };
  const handleWalletDisconnected = () => {
    toast.success('bye bye');
  };

  // carousel



  // --------------------------
  return (
    <>
      <div className="bgs  text-white " >
        {/* want to add logo image fontspace */}
        <h1 className="text-white text-4xl justify-center text-center font-bold p-6 " > Stake Your Nft </h1>

        {!address ? (
          <button
            onClick={address ? () => {
              disconnect();
              handleWalletDisconnected();
            } : () => {
              connectWithMetamask();
              handleWalletConnected();
            }}
            className="bg-[#04030b] flex  mx-auto mt-36 backdrop-filter font-semibold  border-2 border-[#2c1f60] backdrop-blur-lg
               bg-opacity-20 hover:bg-opacity-50 text-[#d8fd08] hover:animate-bounce 2xl:animate-bounce 
               hover:text-[#98b200] hover:border-[#d8fd08]  py-4 px-4 rounded-lg  transition-all 
               duration-300"
          >
            {address ? `Disconnect...... (${address.slice(-4)})` : 'Connect Wallet'}
          </button>
        ) : (
          <>
            {/* balance sections */}
            <div className='relative rounded-lg  p-6 my-6'>
              {/* <h2 className='text-white text-2xl font-bold mt-4 text-center'>Your Tokens</h2> */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto '>
                <div className=' bg-opacity-750 backdrop-filter mx-auto shadow-2xl border-[#524497] border-2 overflow-hidden backdrop-blur-3xl border-opacity-70 
                  rounded-lg w-96 p-4'>
                  <h3 className='text-[#e4a200] animate-pulse text-lg font-medium mb-2 text-center'>Claimable Goblinz</h3>
                  <p className='text-white text-lg font-bold text-center'>
                    <b>
                      {!claimableRewards
                        ? "Loading..."
                        : ethers.utils.formatUnits(claimableRewards, 18)}
                    </b>{" "}
                    {tokenBalance?.symbol}
                  </p>
                </div>
                <div className=' bg-opacity-60 border-2 border-[#524497] shadow-2xl overflow-hidden mx-auto w-96 backdrop-filter backdrop-blur-2xl rounded-lg p-4'>
                  <h3 className='text-[#e4a200] text-lg font-medium mb-2  text-center'>Current Goblinz</h3>
                  <p className='text-white text-+-lg font-bold text-center break-all'>
                    <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                  </p>

                </div>
              </div>
            </div>

            {/* claim reward button */}
            <button
              className="mx-auto border-2 border-[#2c1f60] bg-opacity justify-center flex items-end -20 rounded-xl
               text-[#e4ff48] font-bold text-lg px-8 py-2 backdrop-filter 
               backdrop-blur-3xl shadow-lg hover:bg-opacity-30 focus:outline-none focus:ring-2 
               focus:ring-[#98b200]"
              onClick={() => claimRewards(contract, stakingContractAddress)}
            >
              Claim Rewards
            </button>

            {/* -----------STAKED NFT CAROUSEL------------------------------------------------ */}
            <div className=" bg-transparent text-center items-center  " >
              <div className="justify-center bg-opacity-10 rounded-2xl  items-center text-center p-4 mt-7 " >
                <h2 className='text-[#be8700] rounded-md items-center animate-pulse flex bg-opacity-100 
                 w-full text-2xl   border-2 border-x-[9px] border-x-[] border-y-2 border-[#6a42f8] justify-center p-2 md:text-3xlxl bg-black  h-14 backdrop-blur-xl  
                font-bold mt-4 mx-auto '>Your Staked NFTs</h2>
              </div>
              <div className='flex flex-col mt-5 items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-row-3 lg:grid-cols-4 gap-6 w-full max-w-6xl'>
                  {stakedTokens?.[0]?.map((stakedToken: BigNumber, index: number) => (
                    <div key={stakedToken.toString()} className={`mx-auto backdrop-blur-xl border-2 border-gray-700 w-64 sm:block sm:h-full align-middle items-center justify-center bg-opacity-10 rounded-xl p-4`}>
                      <NFTCard tokenId={stakedToken.toNumber()} />
                    </div>
                  ))}
                </div>
              </div>

              {/* UNSTAKED NFT CAROUSEL */}
              <div className="backdrop-blur-2xl  overflow-hidden " >
                <h2 className='text-[#ecebee] sm:text-[#be8700] animate-pulse bg-black m-16 text-start font-extrabold my-16 h-auto shadow-2xl rounded-md items-center flex
                 text-2xl border-2 border-x-[9px] border-x-[] border-y-2 border-[#6a42f8] justify-center p-2 md:text-3xl bg-opacity-100   backdrop-blur-xl  
                 mt-4 mx-auto'>Your Unstaked NFTs</h2>
                <div className='flex flex-col items-center justify-center sm:mx-auto sm:items-center'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
                    {ownedNfts?.map((nft) => (
                      <div className='bg-opacity-50 backdrop-blur-xl border-4 border-white border-opacity-10 w-64 sm:block 
                      sm:h-full align-middle items-center mx-auto justify-center rounded-xl p-4' key={nft.metadata.id.toString()}>
                        <ThirdwebNftMedia metadata={nft.metadata} />
                        <h3 className='text-white text-lg font-bold my-2'>{nft.metadata.name}</h3>
                        <Web3Button
                          contractAddress={stakingContractAddress}
                          action={() => stakeNft(nft.metadata.id)}
                          className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
                        >
                          Stake
                        </Web3Button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <ToastContainer />
          </>
        )
        }
        <div className="p-6" > </div>
      </div>
    </>
  );
};

export default Stake;