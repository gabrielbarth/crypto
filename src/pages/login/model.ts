import { UserModel } from '../../common/models/user.model';

export interface LoginViewModel {
  username: UserModel['username'];
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
}
