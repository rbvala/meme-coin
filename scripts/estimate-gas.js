async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Estimating gas for deploying MemeCoinFactory with account:", deployer.address);
    console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()), "ETH");

    const MemeCoinFactory = await ethers.getContractFactory("MemeCoinFactory");

    const gasEstimate = await ethers.provider.estimateGas(
        MemeCoinFactory.getDeployTransaction()
    );

    const gasPrice = await ethers.provider.getGasPrice();
    const deploymentCost = gasEstimate.mul(gasPrice);

    console.log("Estimated gas:", gasEstimate.toString());
    console.log("Gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
    console.log("Estimated deployment cost:", ethers.utils.formatEther(deploymentCost), "ETH");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
