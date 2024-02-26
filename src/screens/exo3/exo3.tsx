import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './exo3.styles';

const Exo3 = () => {
  const listName = ['Adrien', 'Paul', 'Massi', 'Alan', 'Florian', 'Alexandre'];
  const onItemHold = (name: string) => {
    Alert.alert('Oh appuie long', 'Bonjour ' + name);
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onLongPress={() => {
          onItemHold(item);
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={listName} renderItem={renderItem} />
    </View>
  );
};

export default Exo3;
