const bip39 = require('bip39'); //npm i bip39
const hdWallet = require('ethereumjs-wallet/hdkey') //npm i ethereumjs-wallet

var vanityAddressFoundA = false;

//const regA = /0xAA.*11$/;
const regA = /0xAA.*$/;

var mnemonic;
var seed;
var HdKey;
var node;
var address;

while(!vanityAddressFoundA){

    mnemonic = bip39.generateMnemonic();
    seed = bip39.mnemonicToSeed(mnemonic);
    HdKey = hdWallet.fromMasterSeed(seed);
    node = HdKey.derivePath("m/44'/60'/0'/0/0");
    address = node.getWallet().getChecksumAddressString();
    
    console.log(`\nAddress: ${address});
    if(regA.test(address) && !vanityAddressFoundA){
        vanityAddressFoundA = true;
        console.log(`\nAddress: ${address}\nMnemonic: ${mnemonic}`);
        }
    }
}
