require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        linea: {
            url: "https://rpc.linea.build", // Linea RPC URL
            accounts: ["--------"] // 
        }
    }
};
