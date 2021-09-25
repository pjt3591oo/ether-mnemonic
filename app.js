const bip39 = require("bip39");
const { hdkey } = require("ethereumjs-wallet");

const mnemonic = bip39.generateMnemonic();
console.log(`mnemonic is : "${mnemonic}"`);

(async () => {

  const seed = await bip39.mnemonicToSeed(mnemonic); // seed === entropy
  const rootKey = hdkey.fromMasterSeed(seed);
  const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0");
  console.log(`seed is ${seed.toString('hex')}`)
  
  console.log(`rootKey`)
  console.log(rootKey)

  for (let i = 0; i < 10; i++) {
    console.log(i)
    const childKey = hardenedKey.deriveChild(i); // 값조정 가능
    const wallet = childKey.getWallet();
    const address = wallet.getAddress();
    const privateKey = wallet.getPrivateKey();
  
    console.log(`<CHILDKEY>`)
    console.log(childKey)
  
    console.log(`<WALLET IS>`)
    console.log(wallet)
  
    console.log(`[address] ${address.toString("hex")}`);
    console.log(`[privateKey] ${privateKey.toString("hex")}`);
    console.log('==============================================================================================')
  }
})()