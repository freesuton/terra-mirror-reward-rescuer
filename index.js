import fetch from 'isomorphic-fetch';
import { MsgExecuteContract,Coins, LCDClient,Fee, MnemonicKey } from '@terra-money/terra.js';

const MIR_STAKING_CONTRACT = 'terra17f7zu97865jmknk7p2glqvxzhduk78772ezac5';

// mnemonic key
const MK = '';

// transaction fee  in Luna  (500000 Luna = 0.5 Luna)
const txFee = 50032500;

const executeMsg = {
    withdraw: {}
}

const lcd = new LCDClient({
    URL: 'https://terra-classic-lcd.publicnode.com',
    chainID: 'columbus-5',
    isClassic: true  // *set to true to connect terra-classic chain*
});

const fee = new Fee(250000, { uluna: txFee });

// create a key out of a mnemonic
const mk = new MnemonicKey({
    mnemonic: MK
});

const wallet = lcd.wallet(mk);
const execute = new MsgExecuteContract(
    wallet.key.accAddress, // sender
    MIR_STAKING_CONTRACT, // contract account address
    executeMsg // handle msg
);

const tx = await wallet.createAndSignTx({
    msgs: [execute],
    fee
})
const result = await lcd.tx.broadcast(tx);

console.log(result);

