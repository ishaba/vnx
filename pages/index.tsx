import Head from "next/head";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <div>
      <Head>
        <title>RainbowKit NextJS TypeScript</title>
        <meta
          name="description"
          content="Generated by create next app & RainbowKit Web3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectButton />
      {isConnected ? (
        <p>Connected with the address: {address}</p>
      ) : (
        <p>Please connect your Wallet</p>
      )}
    </div>
  );
}
