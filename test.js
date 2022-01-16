const bip39 = require('bip39'); //npm i bip39@3.0.4
const hdWallet = require('ethereumjs-wallet/hdkey') //npm i ethereumjs-wallet@0.6.5
//buat multicpu/thread jalan
//npm install pm2 -g
//pm2 start api.js -i <processes> [max -1cpu]
//$ pm2 list
//$ pm2 monit
//$ pm2 logs
//$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
//$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
//$ pm2 delete   <app_name|namespace|id|'all'|json_conf>


var vanityAddressFoundA = false;

//const regA = /0xDEPAN.*BELAKANG$/;
//const regA = /0xdead0.*$/;

const add_awal = 'de';
const add_akhir = '';

const regA0 = '0x' + `${add_awal}` + '.*' + `${add_akhir}` + '$';

const regA = new RegExp(regA0);

console.log(`${regA}`);

var mnemonic;
var seed;
var HdKey;
var node;
var address;
var privatekey;

while (!vanityAddressFoundA) {
    console.time("speed");
    //process.stdout.write(".");
    mnemonic = bip39.generateMnemonic();
    //console.log(`\nMnemonic: ${mnemonic}`);
    seed = bip39.mnemonicToSeedSync(mnemonic);
    //console.log(`\nSeed: ${seed}`);
    HdKey = hdWallet.fromMasterSeed(seed);
    node = HdKey.derivePath("m/44'/60'/0'/0/0");
    address = node.getWallet().getChecksumAddressString();
    //privatekey = node.privateExtendedKey();

    //console.log(`\nAddress: ${address}`);
    //if(regA.test(address.toLowerCase()) && !vanityAddressFoundA){
    if (regA.test(address) && !vanityAddressFoundA) {
        vanityAddressFoundA = true;
        console.log(`\nAddress: ${address}\nMnemonic: ${mnemonic}`);
	}
	
    console.timeEnd("speed");
        
    //let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    //let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    //let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    //let year = date_ob.getFullYear();

    // current hours
    //let hours = date_ob.getHours();

    // current minutes
    //let minutes = date_ob.getMinutes();

    // current seconds
    //let seconds = date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    //console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds); //biar tau kalau jalan
    

}
