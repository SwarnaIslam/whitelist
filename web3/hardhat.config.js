require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"})
/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY_URL=process.env.ALCHEMY_API_KEY_URL;
const SEPOLIA_PRIVATE_KEY=process.env.SEPOLIA_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9",
  networks:{
    sepolia:{
      url:ALCHEMY_API_KEY_URL,
      accounts:[SEPOLIA_PRIVATE_KEY]
    },
  },
};




