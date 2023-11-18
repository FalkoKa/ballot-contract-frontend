import { useState } from "react";

export const RequestTokens = (params: { address: string }) => {
  const [data, setData] = useState<{ result: boolean }>();
  const [isLoading, setLoading] = useState(false);

  const body = { address: params.address };

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
    return (
      <button
        className="btn btn-active btn-neutral mb-4 w-full"
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:4000/mint-tokens", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
            .then(res => res.json())
            .then(data => {
              setData(data);
              setLoading(false);
            });
        }}
      >
        Request tokens
      </button>
    );

  return <p>Result: {data.result ? "Minted tokens!" : "No tokens were minted"}</p>;
};
