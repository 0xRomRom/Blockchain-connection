const Web3 = require("web3");
const { ABI } = require("./abi");

const CONTRACT = "0x8B9749E8c1134104ecda7af93Ed7290D321B185D";

let contractInstance;

async function run() {
  try {
    // Create a new instance of Web3
    const web3 = new Web3(
      "https://eth-sepolia.g.alchemy.com/v2/Jk8zckMhO9UxxVBktHc288V6s6UCweAo"
    ); // Replace with your Infura Project ID or any other Ethereum node URL

    // Create the contract instance
    contractInstance = new web3.eth.Contract(ABI, CONTRACT);

    const currentSupply = await contractInstance.methods
      .CURRENT_SUPPLY()
      .call();
    console.log(currentSupply);
  } catch (err) {
    console.error(err);
  }
}

run();
