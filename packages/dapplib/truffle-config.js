require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain common harvest glove frame gather'; 
let testAccounts = [
"0x8c6e3576d345b321d210f2c28fb904a1cbc0ca66d51d36b8aa97638166167568",
"0xc57243d7426277c8a653e251fcb72539fc01b382475d8898641c4b6a7f9c95ae",
"0x8e5b42d9e19112ab8677f931af49250ecfb9180fe62b46c7510d1edcabe25850",
"0x97d4da640fe447ed5ccd1cc028f24ecd7591fbb8a9aba0d1d607668079ba6928",
"0xde7c5772e049cbe761f8d900f8999c74edbe0287980b46dce177d8dc2b5c5f5b",
"0x71934a5131116d5d096ef797b4666e07c7441bbf3c69961ff2f9973e6b225347",
"0xeafb237db3d525fe55c84b9e7cf27e2b9023fadf369d367e660d34cd235c18d7",
"0x7e6a354aeb1f200bb2a1578d4f0cb349720f230413c23d519f0b5f1f2e5ef11a",
"0x112e6e6f1023b5e7dc125c6237d5db340afe9b8ab8b2c8dd991caf8d6f98310f",
"0x5e5001c53c6eb59ad421f96aa51d94e65205fd882b65c560b7b88715b0c28af6"
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

