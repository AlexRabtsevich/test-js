import { IProfile, IResult } from '../common/types';
import ReadableAccountService from './readable-account-service';
import WritableAccountService from './writable-account-service';

export default class AccountService {
  private readableAccountService: ReadableAccountService;

  private writableAccountService: WritableAccountService;

  constructor() {
    this.readableAccountService = new ReadableAccountService();
    this.writableAccountService = new WritableAccountService();
  }

  public getProfile(): IProfile | null {
    return this.readableAccountService.profile;
  }

  public getResult(): IResult | null {
    return this.readableAccountService.result;
  }

  public setProfile(profile: IProfile): void {
    this.writableAccountService.setProfileToLocalStorage(profile);
  }

  public setResult(result: IResult): void {
    this.writableAccountService.setResultToLocalStorage(result);
  }

  public clearProfile(): void {
    this.writableAccountService.clearProfile();
  }

  public isAuthorized(): boolean {
    return Boolean(this.getProfile());
  }
}
