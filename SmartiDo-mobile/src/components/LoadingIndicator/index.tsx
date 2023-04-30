import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../constants/constants';

const LoadingIndicator = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={colors.purple} />
    </View>
  );
};

export default LoadingIndicator;