import * as CryptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, '20202020', '', 'Hello', 123456);

let blockchanin: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchanin;

const getLatestBlock = (): Block => blockchanin[blockchanin.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export { };