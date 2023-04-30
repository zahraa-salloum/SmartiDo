import React, { FC, useState } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

interface CategoryPickerProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}

const CategoryPicker: FC<CategoryPickerProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategorySelect = (value: string) => {
    props.onValueChange(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.picker}>
          <Text>{props.value || 'Select Category'}</Text>
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
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('History')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>History</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('Geography')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Geography</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('Civics')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Civics</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('Philosophy')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Philosophy</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('Math')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Math</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleCategorySelect('Physics')}>
              <View style={styles.option}>
                <Text style={styles.optionText}>Physics</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default CategoryPicker;