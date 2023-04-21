import { useState } from 'react';

import { LoginViewModel } from './model';

import { useAuth } from '../../common/hooks/useAuth';

export const useLoginViewModel = (): LoginViewModel => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState<string>('');

  function handleLogin() {
    signIn(username);
  }

  return {
    username,
    setUsername,
    handleLogin,
  };
};
