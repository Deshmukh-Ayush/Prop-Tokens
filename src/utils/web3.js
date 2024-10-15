import { ethers } from 'ethers';

export const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getContract = (contractAddress, abi) => {
  const provider = getProvider();
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};
