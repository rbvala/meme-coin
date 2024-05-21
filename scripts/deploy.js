// scripts/deploy.js
async function main() {
    const MemeCoinFactory = await ethers.getContractFactory("MemeCoinFactory");
    console.log("Deploying MemeCoinFactory...");

    const memeCoinFactory = await MemeCoinFactory.deploy();
    await memeCoinFactory.deployed();

    console.log("MemeCoinFactory deployed to:", memeCoinFactory.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
