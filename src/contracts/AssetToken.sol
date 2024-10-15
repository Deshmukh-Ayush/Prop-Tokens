// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetToken is ERC1155, Ownable {
    uint256 public constant ASSET_TOKEN_ID = 1;
    
    constructor() ERC1155("https://myapi.com/api/token/{id}.json") {
        // Initial mint of 100 fractional tokens
        _mint(msg.sender, ASSET_TOKEN_ID, 100, "");
    }

    function mintTokens(address to, uint256 amount) public onlyOwner {
        _mint(to, ASSET_TOKEN_ID, amount, "");
    }

    function distributeIncome() public payable {
        // Logic to distribute rental income to token holders
    }
}
