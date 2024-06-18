import { ethers } from "hardhat";
import { contractAddress, deployer, secondAccount } from "../helper";


export async function rateOwnerChange() {
  console.log(`Token at ${contractAddress}`);

  const _contract = await ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  const transferTx = await _contract.balanceOf(deployer);

  const transferTx2 = await _contract.balanceOf(secondAccount);

  console.log("The Deployer's Balance: " + transferTx);
  console.log("The second Account's Balance: " + transferTx2);

  const items = await _contract.getItems();

  for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i}: ${items[i]}`);
  }
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
