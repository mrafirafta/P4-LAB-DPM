import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const WinnerModal = ({ isVisible, message, onClose }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    animationIn="fadeIn"
    animationOut="fadeOut"
    style={styles.modalContainer}
  >
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Pertandingan Selesai</Text>
      <Text style={styles.modalMessage}>{message}</Text>
      <TouchableOpacity style={styles.modalButton} onPress={onClose}>
        <Text style={styles.modalButtonText}>OK</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#2c3e50',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    color: '#2980b9',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2980b9',
    padding: 12,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WinnerModal;
