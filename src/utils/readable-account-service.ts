import { IProfile, IResult } from '../common/types';
import { ACCESS_KEY } from '../common/constants';

export default class ReadableAccountService {
  private readonly _profile: IProfile | null;

  private readonly _result: IResult | null;

  constructor() {
    this._profile = this.getProfileFromLocalStorage();
    this._result = this.getResultFromLocalStorage();
  }

  get profile(): IProfile | null {
    return this._profile;
  }

  get result(): IResult | null {
    return this._result;
  }

  private getProfileFromLocalStorage() {
    try {
      return this._getProfileFromLocalStorage();
    } catch (e) {
      return null;
    }
  }

  private _getProfileFromLocalStorage(): IProfile | null {
    const profile = localStorage.getItem(ACCESS_KEY);
    if (!profile) {
      return null;
    }

    return JSON.parse(profile) as IProfile;
  }

  private getResultFromLocalStorage(): IResult | null {
    try {
      return this._getResultFromLocalStorage();
    } catch (e) {
      return null;
    }
  }

  private _getResultFromLocalStorage() {
    if (!this.profile) {
      return null;
    }

    const profile = localStorage.getItem(this.profile?.lastName);

    if (!profile) {
      return null;
    }

    return JSON.parse(profile) as IResult;
  }
}
