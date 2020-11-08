import { IProfile, IResult } from '../common/types';
import { ACCESS_KEY } from '../common/constants';

export default class WritableAccountService {
  public clearProfile(): void {
    localStorage.clear();
  }

  public setProfileToLocalStorage(profile: IProfile): void {
    try {
      const preparedProfile = WritableAccountService.stringifyProfile(profile);
      localStorage.setItem(ACCESS_KEY, preparedProfile);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public setResultToLocalStorage(result: IResult): void {
    try {
      const preparedResult = WritableAccountService.stringifyResult(result);
      localStorage.setItem(result.lastName, preparedResult);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private static stringifyResult(result: IResult): string {
    return JSON.stringify(result);
  }

  private static stringifyProfile(profile: IProfile): string {
    return JSON.stringify(profile);
  }
}
