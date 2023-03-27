# terra-mirror-reward-rescuer
Until now, you could obtain a share of the remaining 15 million market value of Mir Protocol through liquidity mining if you provided liquidity before its oracle stopped. If you have already provided liquidity to Mir but cannot withdraw it, you can retrieve the reward in the contract using this script.

Run
```
npm install
```
Open index.js with editor and enter mnemonic key and transaction fee
```
const  MK = '';
const  txFee = 50032500;
```
Run 
```
node index.js
```