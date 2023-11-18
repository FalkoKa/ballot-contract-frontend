import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { RequestTokens } from "~~/components/RequestTokens";
import { TokenAddressFromApi } from "~~/components/TokenAddressFromApi";
import { TokenInfo } from "~~/components/TokenInfo";
import { WalletInfo } from "~~/components/WalletInfo";

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-6">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Group 8's Ballot Contract Frontend</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <WalletInfo />
          {address ? (
            <TokenInfo address={address as `0x${string}`} tokenAddress="0x7fE72432Df2F96EB07236FF1d23C85d89f5b5D1F" />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
