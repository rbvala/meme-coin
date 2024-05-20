require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        linea: {
            url: "https://rpc.linea.build", // Linea RPC URL
            accounts: ["0939f2045d8c1b9856e99a6c4c1ad6ea57bc2117e1b2f8fc1dc4bc7778fa3c2f"] // Replace with your private key
        }
    }
};
