const Raly = artifacts.require("Raly");

module.exports = function (deployer) {
  deployer.deploy(Raly, 1000000);
};
