const hre = require("hardhat");
const ethers = require("ethers");
import {
  contractAddress,
  deployer,
  secondAccount,
  transferAmount,
} from "../helper";

export async function transfer() {
  try {
    const _contract = await hre.ethers.getContractAt(
      "DEGENGMAINGTOKEN",
      contractAddress
    );

    const balanceBefore = await _contract.balanceOf(deployer);
    console.log("Balance: before transfer " + balanceBefore);

    const transferTX = await _contract.transfer(secondAccount, transferAmount, {
      from: deployer,
    });
    console.log(`The Transaction Hash ${transferTX.hash}`);

    const balanceAfter = await _contract.balanceOf(deployer);
    console.log("Balance: after transfer " + balanceAfter);
  } catch (error) {
    console.error("Error during transfer:", error);
    process.exit(1);
  }
}

transfer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled promise rejection:", error);
    process.exit(1);
  });
