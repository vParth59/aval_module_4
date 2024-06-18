const hre = require("hardhat");
import {
  contractAddress,
  deployer,
  secondAccount,
  mintAmount,
} from "../helper";

const recieverAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function mint() {
  const _contract = await hre.ethers.getContractAt(
    "DEGENGMAINGTOKEN",
    contractAddress
  );

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.createTokens(deployer, mintAmount, {
    from: deployer,
  });

  console.log(`The Transaction Hash ${mintTX.hash}`);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
