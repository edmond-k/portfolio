export const projects = [
  {
    title: 'NFT Marketplace',
    description: "This is a prototype cross-chain NFT marketplace made with React, Moralis framework, Javascript, Ant Design and Node.js. The marketplace features include listing NFTs in your wallet for sale, buying listed NFTs and a summary of your transactions. ",
    image: '/images/marketplace.jpg',
    tags: ['React', 'Moralis', 'Javascript', 'Node.js'],
    source: 'https://marketplace.edmondthedev.xyz/',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'Staking DAPP',
    description: "This is a staking DAPP that allows users to stake and unstake three types of ERC20 tokens, a DAPP Token, WETH and DAI. The DAPP token is the main token which users get rewarded with once they stake either WETH or DAI token. After receiveing their rewards users can stake their DAPP token for more rewards. ",
    image: '/images/staking DAPP.jpg',
    tags: ['React', 'Usedapp', 'Node.js', 'Typecript', 'Material UI'],
    source: 'https://staking.edmondthedev.xyz/',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'Minting DAPP',
    description: "This is an NFT minting DAPP that facilitates the minting of erc721a non-fungible tokens. The DAPP checks whether the users has enough ETH required to mint the number of tokens choosen. If not the transaction is not broadcasted to the smart contract and an alert of insufficient ETH is issued. If the users has enough eth, a function call is broadcasted to the deployed smart contract via Infura. The call contains the mint amount and value(mint price). Once the minting transaction is complete an alert is issued informing the user of the succesful mint. ",
    image: '/images/minting DAPP.jpg',
    tags: ['React', 'Usedapp', 'Material UI', 'Typescript'],
    source: 'https://mint.pharmapunksofficial.com/',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Whitelist Collection',
    description: "A simple whitelist collection DAPP for an NFT project. The app allows users to submit their addresses tio be whitelisted for minting. But before their address is collected, the app checks whether their wallets contain the a minimum amount. Addresses collected are stored on firebase.",
    image: '/images/whitelist collection website.jpg',
    tags: ['React', 'Typecript', 'Firebase', 'Usedapp', 'Material UI'],
    source: 'https://whitelist.contrasquad.com/',
    visit: 'https://google.com',
    id: 3,
  },
  {
    title: 'Minting DAPP',
    description: "This is a minting DAPP for minting an NFT collection. The app allows users to connect an ethereum wallet either with Metamask or WalletConnect. Once a wallet is connected the user can choose the number of NFTs to mint and mint their NFT(s).",
    image: '/images/minting DAPP OG.jpg',
    tags: ['React', 'Usedapp', 'Material UI', 'Typescript'],
    source: 'https://mint.oggirls.xyz/',
    visit: 'https://google.com',
    id: 2,
  },
];

export const TimeLineData = [
  { text: 'Started my journey through a web development bootcamp', },
  { text: 'Worked as a Web developer', },
  { text: 'Worked as a freelance web developer', },
  { text: 'Started working as a blockchain developer', },
];
