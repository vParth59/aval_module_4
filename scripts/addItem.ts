import { ethers } from "hardhat";
import { contractAddress, deployer, items } from "../helper";

export async function rateOwnerChange() {
  console.log(`Token Contract ayt at ${contractAddress}`);

  const _contract = await ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  for (let i = 0; i < items.length; i++) {
    const transferTx = await _contract.listItem(
      items[i].itemName,
      items[i].itemPrice,
      {
        from: deployer,
      }
    );

    console.log(`Your ${i}th transaction hash is: ${transferTx.hash}`);
  }
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
