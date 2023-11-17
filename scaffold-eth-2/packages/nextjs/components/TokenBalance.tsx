import { useContractRead } from "wagmi";

export const TokenBalance = (params: { address: `0x${string}`; tokenAddress: string }) => {
  const { data, isError, isLoading } = useContractRead({
    address: params.tokenAddress,
    abi: [
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "balanceOf",
    args: [params.address],
  });

  const balance = typeof data === "number" ? data : 0;

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return <p>Your balance: {BigInt(data as number).toString()}</p>;
};
