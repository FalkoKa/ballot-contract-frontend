import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { WalletInfo } from "~~/components/WalletInfo";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Group 8's Ballot Contract Frontend</span>
          </h1>
        </div>
        <WalletInfo />
      </div>
    </>
  );
};

export default Home;
