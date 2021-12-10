require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "",
      accounts: [privateKey],
    },
    mainnet: {
      url: "",
      accounts: [privateKey],
    },
  },
};
