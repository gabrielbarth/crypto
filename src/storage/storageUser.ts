import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserModel } from '../common/models/user.model';
import { USER_STORAGE } from './storageConfig';

export async function storageUserSave(user: UserModel) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: UserModel = storage ? JSON.parse(storage) : {};

  return user;
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE);
}
