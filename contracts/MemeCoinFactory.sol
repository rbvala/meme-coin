// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MemeCoin.sol";

contract MemeCoinFactory {
    MemeCoin[] public memeCoins;

    event MemeCoinCreated(address indexed creator, address memeCoinAddress, string name, string symbol, uint256 initialSupply);

    function createMemeCoin(string memory name, string memory symbol, uint256 initialSupply) public {
        MemeCoin newMemeCoin = new MemeCoin(name, symbol, initialSupply);
        newMemeCoin.transferOwnership(msg.sender);
        memeCoins.push(newMemeCoin);

        emit MemeCoinCreated(msg.sender, address(newMemeCoin), name, symbol, initialSupply);
    }

    function getMemeCoins() public view returns (MemeCoin[] memory) {
        return memeCoins;
    }
}
