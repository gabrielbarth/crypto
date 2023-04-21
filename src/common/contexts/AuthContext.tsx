import React, { useRef } from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserModel } from '../models/user.model';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '../../storage/storageUser';
import { CustomModal, CustomModalProps } from '../components/customModal';

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
      if (username?.trim() === '') {
        toggleModal('Please fill in the username field 😊');
        return;
      }
      setUser({ username });
      storageUserSave({ username });
      toggleModal(`Welcome, ${username} 😄`);
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

  const modalRef = useRef<CustomModalProps | null>(null);
  const toggleModal = (message: string) =>
    modalRef.current && modalRef.current.toggleModal(message);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isLoadingUserStorage,
        signOut,
      }}>
      <CustomModal ref={modalRef} />
      {children}
    </AuthContext.Provider>
  );
};
