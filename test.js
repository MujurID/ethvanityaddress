const bip39 = require('bip39'); //npm i bip39@3.0.4
const hdWallet = require('ethereumjs-wallet/hdkey') //npm i ethereumjs-wallet@0.6.5
	
var vanityAddressFoundA = false;

//const regA = /0xDEPAN.*BELAKANG$/;
const regA = /0xdead.*$/;

var mnemonic;
var seed;
var HdKey;
var node;
var address;

while(!vanityAddressFoundA){

    mnemonic = bip39.generateMnemonic();
	//console.log(`\nMnemonic: ${mnemonic}`);
    seed = bip39.mnemonicToSeedSync(mnemonic);
	//console.log(`\nSeed: ${seed}`);
    HdKey = hdWallet.fromMasterSeed(seed);
    node = HdKey.derivePath("m/44'/60'/0'/0/0");
    address = node.getWallet().getChecksumAddressString();
    
    console.log(`\nAddress: ${address}`);
    if(regA.test(address) && !vanityAddressFoundA){
        vanityAddressFoundA = true;
        console.log(`\nAddress: ${address}\nMnemonic: ${mnemonic}`);
    }

}
