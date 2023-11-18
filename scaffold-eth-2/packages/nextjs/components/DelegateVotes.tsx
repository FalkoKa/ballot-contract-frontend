import { useState } from "react";
import { useContractRead, useContractWrite } from "wagmi";

export const DelegateVotes = (params: { address: string; tokenAddress: string }) => {
  const [voteBalance, setVoteBlance] = useState<string | undefined>();
  const { isLoading, writeAsync } = useContractWrite({
    address: params.tokenAddress,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
        ],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "delegate",
    account: params.address,
  });

  const { refetch } = useContractRead({
    address: params.tokenAddress,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "getVotes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "getVotes",
    args: [params.address],
  });

  if (voteBalance)
    return (
      <>
        <p>Success. Your voting power is now {voteBalance}</p>
      </>
    );

  return (
    <button
      disabled={isLoading}
      className="btn btn-active btn-neutral w-full mb-4"
      onClick={() => {
        writeAsync({ args: [params.address] }).then(async () => {
          const { data } = await refetch();
          setVoteBlance(BigInt(data as number).toString());
        });
      }}
    >
      Delegate Votes
    </button>
  );
};
