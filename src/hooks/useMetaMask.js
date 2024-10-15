import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useMetaMask = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert("MetaMask not installed!");
    }
  };

  return {
    connectWallet,
    account
  };
};