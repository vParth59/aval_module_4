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


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
