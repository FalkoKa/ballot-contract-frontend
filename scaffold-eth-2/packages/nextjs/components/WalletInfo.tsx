import { TokenInfo } from "./TokenInfo";
import { WalletBalance } from "./WalletBalance";
import { useAccount, useNetwork } from "wagmi";

export const WalletInfo = (params: { address: `0x${string}`; chain: any }) => {
  return (
    <div className="collapse collapse-arrow bg-primary text-primary-content px-6 py-2">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Wallet Information</div>
      <div className="collapse-content">
        <p>Your account address is {params.address}</p>
        <p>Connected to the network {params.chain.name}</p>
        <WalletBalance address={params.address as `0x${string}`} />
      </div>
    </div>
  );
};
