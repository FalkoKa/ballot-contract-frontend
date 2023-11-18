import { useState } from "react";

export const DelegateVotes = (params: { address: string }) => {
  const [data, setData] = useState<{ result?: number; error?: string }>();
  const [isLoading, setLoading] = useState(false);

  const body = { address: params.address };

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
    return (
      <button
        className="btn btn-active btn-neutral mb-4"
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:4000/delegate-votes", {
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
        Delegate Votes
      </button>
    );

  if (data.error) return <p>{data.error}</p>;

  return <p>You now have {data.result} votes</p>;
};
