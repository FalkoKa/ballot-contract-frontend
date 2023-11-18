import { DelegateVotes } from "./DelegateVotes";
import { RequestTokens } from "./RequestTokens";
import { TokenBalance } from "./TokenBalance";
import { TokenName } from "./TokenName";

export const TokenInfo = (params: { address: `0x${string}`; tokenAddress: string }) => {
  return (
    <div className="collapse collapse-arrow bg-primary text-primary-content px-6 py-2">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Token Information</div>
      <div className="collapse-content">
        <TokenName tokenAddress={params.tokenAddress} />
        <TokenBalance address={params.address} tokenAddress={params.tokenAddress} />
        <RequestTokens address={params.address as `0x${string}`} />
        <DelegateVotes address={params.address as `0x${string}`} tokenAddress={params.tokenAddress} />
      </div>
    </div>
  );
};
