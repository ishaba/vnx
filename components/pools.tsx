import { useAccount } from "wagmi";
import { Position } from "../generated/schema";

export default function Pools({ positions }: { positions: Position[] }) {
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <div>
          {positions.map(({ id }: Position) => (
            <div key={id}>{id}</div>
          ))}
        </div>
      ) : (
        <p>Please connect your Wallet</p>
      )}
    </div>
  );
}
