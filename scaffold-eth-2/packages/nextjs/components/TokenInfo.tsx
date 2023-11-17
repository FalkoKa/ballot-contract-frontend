import { TokenBalance } from "./TokenBalance";
import { TokenName } from "./TokenName";

export const TokenInfo = (params: { address: `0x${string}`; tokenAddress: string }) => {
  return (
    <div className="card bg-primary text-primary-content px-6 py-2">
      <TokenName tokenAddress={params.tokenAddress} />
      <TokenBalance address={params.address} tokenAddress={params.tokenAddress} />
    </div>
  );
};
