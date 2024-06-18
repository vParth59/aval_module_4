import { ethers } from "hardhat";
import { deployer } from "../helper";

async function main() {
  const aval_20 = await ethers.deployContract("DEGENGMAINGTOKEN", [
    "Degen",
    "DGN",
    deployer,
  ]);

  await aval_20.waitForDeployment();

  console.log(`ERC20 deployed to ${aval_20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
