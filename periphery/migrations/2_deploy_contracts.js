const PancakeRouter = artifacts.require("PancakeRouter.sol");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(PancakeRouter, '0xab5ac21AE16b3cd0361A4E25738f100387DB13dA', '0xae13d989dac2f0debff460ac112a837c89baa7cd');
};