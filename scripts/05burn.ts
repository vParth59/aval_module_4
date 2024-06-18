import { ethers } from "hardhat";
import { contractAddress, deployer, burnAmount } from "../helper";

export async function rateOwnerChange() {
  console.log(`Token at ${contractAddress}`);

  const _contract = await ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  const balanceBefore = await _contract.balanceOf(deployer, {
    from: deployer,
  });

  console.log("Balance: before burn " + balanceBefore);

  const transferTx = await _contract.destroyTokens(burnAmount, {
    from: deployer,
  });

  const balanceAfter = await _contract.balanceOf(deployer, {
    from: deployer,
  });

  console.log("Balance: after burn " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
