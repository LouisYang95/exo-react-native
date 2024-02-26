import React from 'react';
import {View} from 'react-native';
import styles from './exo1.styles';

const Exo1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstPart} />
      <View style={styles.secondPart}>
        <View style={styles.smallCube} />
        <View style={styles.smallCube} />
        <View style={styles.smallCube} />
      </View>
      <View style={styles.thirdPart} />
    </View>
  );
};

export default Exo1;
