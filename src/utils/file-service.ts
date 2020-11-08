import FileSaver from 'file-saver';
import { IProfile, IResult } from '../common/types';
import AccountService from './account-service';

const HEADER_TYPE = 'text/plain;charset=utf-8';

export default class FileService {
  private readonly profile: IProfile | null;

  private result: IResult | null;

  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
    this.profile = this.accountService.getProfile();
    this.result = this.accountService.getResult();
  }

  public saveResultToFile(): void {
    const fileLine = this.getFileLineWithResult();
    const fileName = this.getFileName();

    const file = new File([fileLine], fileName, { type: HEADER_TYPE });
    FileSaver.saveAs(file);
  }

  private getFileLineWithResult(): string {
    return `Last Name: ${this.result?.lastName} Rating: ${this.result?.rating}`;
  }

  private getFileName(): string {
    if (!this.profile) {
      return 'test-result.txt';
    }

    return `${this.profile.lastName}.txt`;
  }
}
