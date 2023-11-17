import { useBalance } from "wagmi";

export const WalletBalance = (params: { address: `0x${string}` }) => {
  console.log(params.address);
  const { data, isError, isLoading } = useBalance({
    address: params.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <p>
      Balance: {data?.formatted} {data?.symbol}
    </p>
  );
};
