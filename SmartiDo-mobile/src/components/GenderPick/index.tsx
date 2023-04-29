import React, { FC, useState } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

interface GenderPickerProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}

const GenderPicker: FC<GenderPickerProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleGenderSelect = (value: string) => {
    props.onValueChange(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.picker}>
          <Text>{props.value || 'Select Gender'}</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableWithoutFeedback onPress={() => handleGenderSelect('male')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Male</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleGenderSelect('female')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Female</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default GenderPicker;