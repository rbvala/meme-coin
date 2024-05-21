# MemeCoin on Linea

## Overview

The MemeCoin project consists of two main smart contracts: `MemeCoin` and `MemeCoinFactory`. `MemeCoin` is an ERC-20 token that represents a meme coin, and `MemeCoinFactory` is a factory contract that allows users to create multiple instances of `MemeCoin` with customizable parameters.

## Contracts

### MemeCoin

`MemeCoin` is an ERC-20 token contract that allows minting of new tokens by the owner. It includes the following features:

- Minting new tokens.
- Basic ERC-20 functionality (transfer, approve, etc.).

### MemeCoinFactory

`MemeCoinFactory` is a factory contract that allows the creation of new `MemeCoin` instances with specified parameters such as name, symbol, and initial supply. It keeps track of all created `MemeCoin` instances.

## Setup

### Prerequisites

- Node.js and npm: Install from [Node.js](https://nodejs.org/).
- Hardhat: Install using npm.
- Git: For version control and repository management.
- An Ethereum wallet with some ETH for gas fees on the Linea blockchain.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/meme-coin.git
   cd meme-coin
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` File**:
   In the root directory, create a `.env` file and add your private key.
   ```plaintext
   PRIVATE_KEY=your_new_private_key_here
   ```

4. **Configure `.gitignore`**:
   Ensure your `.gitignore` file includes the following lines to avoid committing sensitive information:
   ```plaintext
   node_modules/
   .env
   ```

### Hardhat Configuration

Ensure your `hardhat.config.js` file is configured to use environment variables for the private key and to connect to the Linea blockchain:
```javascript
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        linea: {
            url: "https://rpc.linea.build",
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};
```

## Deployment

### Deploy MemeCoinFactory

1. **Deploy the MemeCoinFactory**:
   ```bash
   npx hardhat run scripts/deploy.js --network linea
   ```

### Create New MemeCoins

1. **Create a New MemeCoin**:
   Create a script `scripts/create-meme-coin.js` to interact with the `MemeCoinFactory`.

   ```javascript
   async function main() {
       const [deployer] = await ethers.getSigners();

       console.log("Using deployer account:", deployer.address);
       console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()), "ETH");

       const factoryAddress = "YOUR_DEPLOYED_FACTORY_ADDRESS";
       const MemeCoinFactory = await ethers.getContractFactory("MemeCoinFactory");
       const memeCoinFactory = MemeCoinFactory.attach(factoryAddress);

       const name = "NewMemeCoin";
       const symbol = "NMC";
       const initialSupply = ethers.utils.parseUnits("1000000", 18);

       const tx = await memeCoinFactory.createMemeCoin(name, symbol, initialSupply);
       await tx.wait();

       console.log(`New MemeCoin created with name: ${name}, symbol: ${symbol}, and initial supply: ${initialSupply.toString()}`);
   }

   main().catch((error) => {
       console.error(error);
       process.exitCode = 1;
   });
   ```

2. **Run the Script to Create a New MemeCoin**:
   ```bash
   npx hardhat run scripts/create-meme-coin.js --network linea
   ```

### List Created MemeCoins

1. **Create a Script to List MemeCoins**:
   Create a script `scripts/list-meme-coins.js` to list all created MemeCoins.

   ```javascript
   async function main() {
       const [deployer] = await ethers.getSigners();

       console.log("Using deployer account:", deployer.address);
       console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()), "ETH");

       const factoryAddress = "YOUR_DEPLOYED_FACTORY_ADDRESS";
       const MemeCoinFactory = await ethers.getContractFactory("MemeCoinFactory");
       const memeCoinFactory = MemeCoinFactory.attach(factoryAddress);

       const memeCoins = await memeCoinFactory.getMemeCoins();

       for (let i = 0; i < memeCoins.length; i++) {
           console.log(`MemeCoin ${i + 1}: ${memeCoins[i]}`);
       }
   }

   main().catch((error) => {
       console.error(error);
       process.exitCode = 1;
   });
   ```

2. **Run the Script to List MemeCoins**:
   ```bash
   npx hardhat run scripts/list-meme-coins.js --network linea
   ```

## Best Practices

- **Secure Private Key**: Always use environment variables to manage sensitive information such as private keys.
- **Ignore Sensitive Files**: Ensure `.env` is listed in `.gitignore` to avoid committing it to the repository.
- **Regular Commits**: Make regular commits with descriptive messages to track your progress and changes.

## Troubleshooting

- **Insufficient Funds**: Ensure your wallet has enough ETH to cover gas fees for deployment and interactions.
- **Network Configuration**: Double-check the network configuration in `hardhat.config.js` to ensure you are deploying to the correct network.
- **Private Key Security**: If your private key has been exposed, transfer your funds to a new wallet and update the `.env` file with the new private key.
