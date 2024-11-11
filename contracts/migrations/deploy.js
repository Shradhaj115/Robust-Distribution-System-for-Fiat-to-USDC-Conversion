const FiatToUSDC = artifacts.require("FiatToUSDC");

module.exports = function (deployer) {
  const treasuryAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
  deployer.deploy(FiatToUSDC, treasuryAddress);
};
