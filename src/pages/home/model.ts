import { UserModel } from '../../common/models/user.model';

export interface HomeViewModel {
  username?: UserModel['username'];
  handleLogout: () => Promise<void>;
}
