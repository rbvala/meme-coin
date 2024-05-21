require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    solidity: "0.8.0",
    networks: {
        linea: {
            url: "https://rpc.linea.build", // Linea RPC URL
            accounts: [process.env.PRIVATE_KEY] // Load private key from .env file
        }
    }
};
