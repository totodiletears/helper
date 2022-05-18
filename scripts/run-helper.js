const hre = require('hardhat')
const ethers = hre.ethers
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    const helper = await hre.ethers.getContractAt("Helper", process.env.HELPER_ADDRESS);

    const result = await helper.getIdArray(process.env.OWNER);

    console.log(result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })