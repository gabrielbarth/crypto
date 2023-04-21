import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export type CustomModalProps = ModalProps & {
  toggleModal: (message: string) => void;
};

export type CustomModalRef = {
  toggleModal: (message: string) => void;
};

const CustomModal = forwardRef<CustomModalProps>((_, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  useImperativeHandle(ref, () => ({
    toggleModal(modalMessage) {
      setModalVisible(!modalVisible);
      setMessage(modalMessage);
    },
  }));

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
      // @ts-ignore
      ref={ref}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText} numberOfLines={2} ellipsizeMode="tail">
            {message}
          </Text>
          <TouchableOpacity
            style={[styles.button]}
            onPress={closeModal}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export { CustomModal };
