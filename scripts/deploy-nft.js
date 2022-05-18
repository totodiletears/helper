const hre = require('hardhat')
const ethers = hre.ethers

async function main() {
  const amount = 4500;
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  await token.deployed();

  console.log("NFT deployed: ", token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })