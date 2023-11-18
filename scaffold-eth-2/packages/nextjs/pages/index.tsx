import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";
import { BallotContract } from "~~/components/BallotContract";
import { MetaHeader } from "~~/components/MetaHeader";
import { RequestTokens } from "~~/components/RequestTokens";
import { TokenAddressFromApi } from "~~/components/TokenAddressFromApi";
import { TokenInfo } from "~~/components/TokenInfo";
import { TransferTokenForm } from "~~/components/TransferTokenForm";
import { WalletInfo } from "~~/components/WalletInfo";

const BALLOT_CONTRACT_ADDRESS = "";
const TOKEN_CONTRACT_ADDRESS = "0x7fE72432Df2F96EB07236FF1d23C85d89f5b5D1F";

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();

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
        {isDisconnected && <div>Wallet disconnected. Connect wallet to continue</div>}
        {!isConnecting ? (
          <div className="grid gap-3">
            {address && chain && <WalletInfo address={address as `0x${string}`} chain={chain} />}
            {address && <TokenInfo address={address as `0x${string}`} tokenAddress={TOKEN_CONTRACT_ADDRESS} />}
            {address && <TransferTokenForm address={address as `0x${string}`} tokenAddress={TOKEN_CONTRACT_ADDRESS} />}
            {address && <BallotContract address={address as `0x${string}`} tokenAddress={BALLOT_CONTRACT_ADDRESS} />}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
