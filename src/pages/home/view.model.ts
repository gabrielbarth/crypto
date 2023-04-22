import { useEffect, useState } from 'react';

import { HomeViewModel } from './model';
import { useAuth } from '../../common/hooks/useAuth';
import { fetchCryptos } from '../../services/fetchCryptos';
import { CryptoModel } from '../../common/models/crypto.model';

export const useHomeViewModel = (): HomeViewModel => {
  const [cryptos, setCryptos] = useState<CryptoModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { signOut } = useAuth();

  async function handleLogout() {
    await signOut();
  }

  async function handleFetchCryptos() {
    setIsLoading(true);
    const response = await fetchCryptos();
    if (response) {
      setCryptos(response);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    handleFetchCryptos();
  }, []);

  return {
    handleLogout,
    cryptos,
    isLoading,
  };
};
