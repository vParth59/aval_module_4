import { ethers } from "hardhat";
import { contractAddress, deployer, secondAccount } from "../helper";

// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

export async function rateOwnerChange() {
  console.log(`Token at ${contractAddress}`);

  const _contract = await ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  const transferTx = await _contract.getMyItems();

  if (transferTx.length > 0) {
    console.log("Your Items: " + transferTx);
  } else {
    console.log("No items available");
  }
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
