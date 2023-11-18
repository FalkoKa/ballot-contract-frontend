import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';
import { ConfigService } from '@nestjs/config';

const MINT_VALUE = ethers.parseUnits('1');

@Injectable()
export class AppService {
  contract: ethers.Contract;
  provider: ethers.Provider;
  wallet: ethers.Wallet;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.JsonRpcProvider(
      this.configService.get<string>('RPC_ENDPOINT_URL'),
    );
    this.wallet = new ethers.Wallet(
      this.configService.get<string>('PRIVATE_KEY'),
      this.provider,
    );
    this.contract = new ethers.Contract(
      this.configService.get<string>('TOKEN_ADDRESS'),
      tokenJson.abi,
      this.wallet,
    );
  }

  async getLastBlockNumber(): Promise<string> {
    const provider = ethers.getDefaultProvider('sepolia');
    const blockNumber = await provider.getBlockNumber();
    return `The last block number from Sepolia was ${blockNumber}`;
  }

  getTokenAddress(): string {
    return this.configService.get<string>('TOKEN_ADDRESS');
  }

  async getTokenName(): Promise<string> {
    return await this.contract.name();
  }

  async getTotalSupply() {
    return ethers.formatUnits(await this.contract.totalSupply());
  }

  async getTokenBalance(address: string) {
    const balance = await this.contract.balanceOf(address);
    return ethers.formatUnits(balance);
  }

  async getTransactionReceipt(hash: string) {
    return await this.provider.getTransaction(hash);
  }

  getServerWalletAddress() {
    return this.wallet.address;
  }

  async checkMinterRole(address: string) {
    const minterRole = await this.contract.MINTER_ROLE();
    const hasRole = await this.contract.hasRole(minterRole, address);
    return hasRole;
  }

  async mintTokens(address: string) {
    try {
      const mintTx = await this.contract.mint(address, MINT_VALUE);
      await mintTx.wait();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async transferTokens() {
    // todo
    return null;
  }

  async delegateVotes(address: string) {
    try {
      console.log(address);
      const delegateTx = await this.contract.delegate(address);
      await delegateTx.wait();

      const votesAfter = await this.contract.getVotes(address);
      console.log(votesAfter);
      return { result: ethers.formatUnits(votesAfter) };
    } catch (error: any) {
      console.log(error);
      return { error: 'There was an error' };
    }
  }
}
