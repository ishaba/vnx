import Head from "next/head";
import { Position } from "../generated/schema";
import { createClient } from "../generated";
import Header from "../components/header";
import Pools from "../components/pools";

const client = createClient({
  url: "https://api.thegraph.com/subgraphs/name/wshbair/subgraph",
});

export const getStaticProps = async () => {
  const { positions } = await client.query({
    positions: {
      // @ts-ignore
      id: true,
      incentiveId: true,
      liquidity: true,
      owner: true,
      oldOwner: true,
      staked: true,
      tokenId: true,
    },
  });

  return {
    props: {
      positions,
    },
  };
};

export default function Home({ positions }: { positions: Position[] }) {
  return (
    <div>
      <Head>
        <title>VNX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Pools positions={positions} />
    </div>
  );
}
