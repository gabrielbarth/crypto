import { CryptoModel } from '../../common/models/crypto.model';

export interface HomeViewModel {
  handleLogout: () => Promise<void>;
  cryptos: CryptoModel[];
  isLoading: boolean;
}
