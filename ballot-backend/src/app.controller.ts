import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MintTokenDto } from './dtos/mintToken.dto';
import { DelegateVotesDto } from './dtos/delegateVotes.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('last-block-number')
  async getLastBlockNumber(): Promise<string> {
    return await this.appService.getLastBlockNumber();
  }

  @Get('token-address')
  getContractAddress() {
    return { result: this.appService.getTokenAddress() };
  }

  @Get('token-name')
  async getTokenName() {
    return { result: await this.appService.getTokenName() };
  }

  @Get('total-supply')
  async getTotalSupply() {
    return { result: await this.appService.getTotalSupply() };
  }

  @Get('token-balance/:address')
  async getTokenBalance(@Param('address') address: string) {
    return { result: await this.appService.getTokenBalance(address) };
  }

  @Get('transaction-receipt')
  async getTransactionReceipt(@Query('hash') hash: string) {
    return { result: await this.appService.getTransactionReceipt(hash) };
  }

  @Get('server-wallet-address')
  getServerWalletAddress() {
    return { result: this.appService.getServerWalletAddress() };
  }

  @Get('check-minter-role')
  async checkMinterRole(@Query('address') address: string) {
    return { result: await this.appService.checkMinterRole(address) };
  }

  @Post('mint-tokens')
  async mintTokens(@Body() body: MintTokenDto) {
    return { result: await this.appService.mintTokens(body.address) };
  }

  @Post('transfer-tokens')
  async transferTokens(@Body() body: any) {
    // todo
    return await this.appService.transferTokens();
  }

  @Post('delegate-votes')
  async deletateVotes(@Body() body: DelegateVotesDto) {
    return await this.appService.delegateVotes(body.address);
  }
}
