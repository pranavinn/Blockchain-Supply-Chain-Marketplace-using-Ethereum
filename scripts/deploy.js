const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const Tracking = await hre.ethers.getContractFactory("Tracking");
    // Deploy the contract
    const tracking = await Tracking.deploy();

    // Wait for the contract to be deployed
    await tracking.deployed();

    // Print the contract address
    console.log("Tracking deployed to:", tracking.address);
}

// Execute the main function
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


