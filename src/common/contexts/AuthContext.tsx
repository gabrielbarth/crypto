import React from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserModel } from '../models/user.model';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '../../storage/storageUser';

type AuthContextDataProps = {
  user?: UserModel;
  signIn: (username: UserModel['username']) => void;
  signOut: () => Promise<void>;
  isLoadingUserStorage: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserModel>({} as UserModel);
  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(true);

  function signIn(username: UserModel['username']) {
    try {
      setUser({ username });
      storageUserSave({ username });
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorage(true);
      setUser({} as UserModel);
      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorage(false);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorage(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isLoadingUserStorage,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
