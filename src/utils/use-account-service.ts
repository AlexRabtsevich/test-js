import { useMemo } from 'react';

import AccountService from './account-service';

const useAccountService = (): AccountService => {
  return useMemo(() => new AccountService(), []);
};

export default useAccountService;
