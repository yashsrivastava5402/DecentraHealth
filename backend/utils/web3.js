const Web3 = require("web3");
const address = "0xA7D69735358D9F326bE7F10e520AD7fc028533a1";
// const privateKey =
//   "c41b61313b7ef7f674c19529bdd55c9971fce3aaddd25f00a36cd3546f138238";
// const address =""
const privateKey =
  "493b8811be68acc425636ab20873c43da8afd771bcd6cc551371a075abde73f3";
//   const web3 = new Web3(infuraUrl);
const provider = new Web3.providers.HttpProvider(
  "https://polygon-amoy.g.alchemy.com/v2/MLne3BTvQSbvWShAD6PywxZNZvq_TBJR"
);
const web3 = new Web3(provider);

const ADDRESS = "0x448B33265a0191d903E2bF097fFAC7cE60EaBCed";

const ABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addOwner",
    inputs: [
      {
        type: "address",
        name: "_newOwner",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getUserData",
    inputs: [
      {
        type: "uint256",
        name: "_userAddharNumber",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "string",
            name: "userDataDetail",
            internalType: "string",
          },
          {
            type: "string",
            name: "userDataFilename",
            internalType: "string",
          },
          {
            type: "uint256",
            name: "userDatadate",
            internalType: "uint256",
          },
        ],
        internalType: "struct Decentrahealth.UserData[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeOwner",
    inputs: [
      {
        type: "address",
        name: "_ownerToRemove",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUserData",
    inputs: [
      {
        type: "uint256",
        name: "_userAddharNumber",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_report",
        internalType: "string",
      },
      {
        type: "string",
        name: "_fileName",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
];
const contract = new web3.eth.Contract(ABI, ADDRESS);
const transactionhandle = async (data) => {
  const dataencoded = data.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      from: address,
      to: ADDRESS,
      data: dataencoded,
      gas: 500000,
      nonce: nonce,
    },
    privateKey
  );
  await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      if (!error) {
        console.log(
          ":tada: The hash of your transaction is: ",
          hash,
          "\n Check polygonscan to view the status of your transaction!"
        );
      } else {
        console.log(
          ":exclamation:Something went wrong while submitting your transaction:",
          error
        );
      }
    }
  );
};
exports.setdata = async (aadhar, filename, filehash) => {
  const tx = await contract.methods.setUserData(aadhar, filehash, filename);
  await transactionhandle(tx);
};
exports.getdata = async (aadhar) => {
  const tx1 = await contract.methods
    .getUserData(aadhar)
    .call({ from: address });
  console.log(tx1);
  return tx1;
  //transactionhandle();
};