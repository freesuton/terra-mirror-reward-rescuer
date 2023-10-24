import { MsgExecuteContract, Coins, LCDClient, Fee, MnemonicKey } from '@terra-money/terra.js';
import 'dotenv/config'

// Your mnemonic key (ensure it's securely stored and never exposed!)
const MK = process.env.MK;

// Transaction fee in Luna (500000 Luna = 0.5 Luna)
const txFee = 50032500;
const MIR_STAKING_CONTRACT = process.env.MIR_STAKING_CONTRACT;

const executeMsg = {
    withdraw: {}  // Ensure this message matches the expected format for the contract
}

const lcd = new LCDClient({
    URL: process.env.RPC,
    chainID: 'columbus-5',
    isClassic: true
});

const fee = new Fee(250000, { uluna: txFee });

const mk = new MnemonicKey({
    mnemonic: MK
});

const wallet = lcd.wallet(mk);

const execute = new MsgExecuteContract(
    wallet.key.accAddress, 
    MIR_STAKING_CONTRACT, 
    executeMsg
);

async function sendTx() {
    try {
        const tx = await wallet.createAndSignTx({
            msgs: [execute],
            fee
        });
        const result = await lcd.tx.broadcast(tx);
        console.log(result);
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

// sendTx();
console.log(MK);
