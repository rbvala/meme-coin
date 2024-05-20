// scripts/deploy.js
async function main() {
    const MemeCoin = await ethers.getContractFactory("MemeCoin");
    console.log("Deploying MemeCoin...");

    // Deploy the contract with an initial supply of 1,000,000 tokens (1e6 with 18 decimals)
    const memeCoin = await MemeCoin.deploy(ethers.utils.parseUnits("1000000", 18));

    await memeCoin.deployed();
    console.log("MemeCoin deployed to:", memeCoin.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
