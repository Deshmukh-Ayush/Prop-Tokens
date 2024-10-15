import { useMetaMask } from '../hooks/useMetaMask';

export default function MetaMaskConnect() {
  const { connectWallet, account } = useMetaMask();

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <p>Connected: {account}</p>
      )}
    </div>
  );
}
