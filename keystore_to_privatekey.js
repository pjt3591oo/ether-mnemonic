const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

const keystore = {"address":"56ae1237f0d3e2f21683bd04402092e26f469813","crypto":{"cipher":"aes-128-ctr","ciphertext":"f122e4af79b77ba76ef0262b35663d5b4f2e3843c3d126b08a6183fa8a270978","cipherparams":{"iv":"83540949bfa751adda5421e52e90a099"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"0024382d13a374a0334160837b46e1956f966f0653830dee4e4982eca79975bf"},"mac":"ea9c823d3477f54de1ddc1e385001837b7dd0d2a51765d44a7cc1ede30d2fcd0"},"id":"42f99e74-82ad-4ab1-b1e9-b69bda9c7028","version":3};
const password = 'p';

const privatekey = web3.eth.accounts.wallet.decrypt([keystore], password);
console.log(privatekey);
