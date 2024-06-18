import { ethers } from "hardhat";
import { contractAddress, deployer, secondAccount } from "../helper";



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
