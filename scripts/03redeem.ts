import { ethers } from "hardhat";
import { contractAddress, deployer } from "../helper";

const itemId = 1;

export async function rateOwnerChange() {
  console.log(`Token at ${contractAddress}`);

  const _contract = await ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  const balanceBefore = await _contract.balanceOf(deployer);

  console.log("Balance: before redeem " + balanceBefore);

  const transferTx = await _contract.purchaseItem(itemId);

  console.log("The transfer transaction is ", transferTx.hash);

  const balanceAfter = await _contract.balanceOf(deployer);

  console.log("Balance: after redeem " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
