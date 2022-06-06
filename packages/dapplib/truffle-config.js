require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth mirror pull gesture drink equal giant'; 
let testAccounts = [
"0x0513d606f3a58c2ed984fbb98d5a2c08e8661fabc34fdcbfd5f7b9a0143d2de2",
"0xd9dc919915d59f5246712c87cd8f696d8c09b7fedb5f34e8a1060fd8fa744770",
"0x771b279c61c5122b4279bcc9c7a7b849f972c0d9f86d2b7c89cdbc50ef9a0d36",
"0xe29868c856ceac6fe11e5a303d28ed611dcc46d110867cd18c126118efaf2d8c",
"0x82a5fda471b2fea502d4a3b7207fa93fa1b7de232ff6eef705dfe69a618d9fa3",
"0x6aeaf931808f1c820bec9998004a8a2599c45d2c33e411b21c4722af229f1766",
"0x2c06a7c94c1e1e53f3098d864653e0d7857684d0e5fdc170777a5353c840dff7",
"0xd86e18b6b8c7103cdcb87507dedd4ebdfa8a4a4e3e74bf297c3741395e203823",
"0xe8ea652931b786ac69acfaefc2640936b670eed29c7abac0785f879f19898ac0",
"0x46428d9e9d42c26cc1feaf804de90a27372bed29be16e6838eaa46e2988548f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

