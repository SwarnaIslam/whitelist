// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");

async function main() {
  const whitelistContract=await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract=await whitelistContract.deploy(10);

  // Wait for the contract to be deployed before calling the console.log() function.
  await deployedWhitelistContract.waitForDeployment();

  console.log(
    "whitelist contract address: ",
    deployedWhitelistContract.target
  );
}
// 0x9E28F534FC1e1cbe5194ba4EaaC7531151E41377
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
