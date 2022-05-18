const hre = require('hardhat');
const ethers = hre.ethers;
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    const Helper = await hre.ethers.getContractFactory("Helper");
    const helper = await Helper.deploy(process.env.CONTRACT_ADDRESS);

    await helper.deployed();

    console.log("Helper deployed to: ", helper.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })