// deploy script

const SupplyChain = artifacts.require("SupplyChain.sol");

module.exports = async (deployer) => {
  await deployer.deploy(SupplyChain);

  //access information about your deployed contract instance
  const supply = await SupplyChain.deployed();

  await supply.addNewrecord(
    "dominion",
    "temi",
    "praise",
    "lokoja",
    "pills",
    6000
  );
  const item = await supply.retrieveItem(0);
};
