# HELPER CONTRACT

abi in artifacts/contracts/Helper.sol<br /><br />
deployed helpers in info.txt<br /><br />
main function is helper.getIdArray(address user) returns array<br /><br /><br /><br />

```shell
TO RUN PROGRAM (configured for harmony testnet)
npm install
update env with owner address and phrase
npx hardhat compile
npx hardhat run scripts/deploy-nft.js
update env with CONTRACT_ADDRESS that was logged
npx hardhat run scripts/mint-nft.js (mints 5000, takes a while)
npx hardhat run scripts/deploy-helper.js
update env with HELPER_ADDRESS
npx hardhat run scripts/run-helper.js
```
