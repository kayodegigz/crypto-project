import { secp256k1 } from 'ethereum-cryptography/secp256k1';
import { toHex } from 'ethereum-cryptography/utils';
import { keccak256 } from 'ethereum-cryptography/keccak';

// console.log(secp256k1);

const privateKey = secp256k1.utils.randomPrivateKey();

const publicKey = secp256k1.getPublicKey(privateKey);

console.log('private key: ', toHex(privateKey));

console.log('public key: ', toHex(publicKey));

console.log('eth address for public key: ', publicKey, 'is: ', getEthereumAddress(publicKey));


function getEthereumAddress(publicKey) {
    const pubKeySlice = publicKey.slice(1);

    const hash = keccak256(pubKeySlice);
  
    const addressBytes = hash.slice(-20);
  
    return `0x${toHex(addressBytes)}`;
}