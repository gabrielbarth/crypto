import { HomeViewModel } from './model';

import { useAuth } from '../../common/hooks/useAuth';

export const useHomeViewModel = (): HomeViewModel => {
  const { signOut, user } = useAuth();

  async function handleLogout() {
    await signOut();
  }

  return {
    username: user?.username,
    handleLogout,
  };
};
