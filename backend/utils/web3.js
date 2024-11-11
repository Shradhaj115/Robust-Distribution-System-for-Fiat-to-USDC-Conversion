const Web3 = require('web3');
const FiatToUSDC = require('../contracts/FiatToUSDC.json'); // ABI file

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_RPC_URL));
const contract = new web3.eth.Contract(FiatToUSDC.abi, process.env.CONTRACT_ADDRESS);

async function transferUSDC(userAddress, amount) {
  const treasuryAddress = process.env.TREASURY_ADDRESS;
  const privateKey = process.env.TREASURY_PRIVATE_KEY;

  const transaction = contract.methods.transferUSDC(userAddress, amount);
  const gas = await transaction.estimateGas({ from: treasuryAddress });

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: process.env.CONTRACT_ADDRESS,
      data: transaction.encodeABI(),
      gas,
    },
    privateKey
  );

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return receipt;
}

module.exports = { transferUSDC };
