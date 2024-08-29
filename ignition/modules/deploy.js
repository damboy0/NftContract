const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTModule", (m) => {
  // Define parameters for deployment
  const initialOwner = "0x91935e2e959fb504640280C08530156c67F89479";  // Replace with the actual deployer address
  const tokenURI = m.getParameter("tokenURI", "https://ipfs.io/ipfs/QmWL4dztPBsWa6BUTqqmJBkwwLTndMdpkCC1ij4ug3fb5g");

  // Deploy the NFT contract
  const nft = m.contract("MyNFT", [initialOwner], { from: initialOwner });

  // Mint the NFT after deployment
  m.call(nft, "mintNFT", [initialOwner, tokenURI]);

  return { nft };
});
