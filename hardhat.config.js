require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    testnet: {
      // url: "https://api.s0.b.hmny.io", testnet
      url: "https://api.harmony.one",
      accounts: {
        mnemonic: process.env.MNEMONIC_PHRASE,
        path: "m/44'/60'/0'/0",
      },
    },
    // ganache: {
    //   url: "127.0.0.1:8545",
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC_PHRASE,
    //     path: "m/44'/60'/0'/0/0"
    //   }
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
