import { useContractRead } from "wagmi";

export const TokenName = (params: { tokenAddress: string }) => {
  const { data, isError, isLoading } = useContractRead({
    address: params.tokenAddress,
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <p>Token name: {name}</p>;
};
