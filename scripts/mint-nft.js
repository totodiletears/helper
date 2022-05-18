const hre = require('hardhat')
const ethers = hre.ethers
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    const amount = 500;
    const times = 10;
    const token = await hre.ethers.getContractAt("Token", process.env.CONTRACT_ADDRESS);

    for (i = 0; i < times; i++) {
        await token.mint(amount)
    }

    console.log("Minted ", amount*times)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })