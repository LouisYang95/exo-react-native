import React from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './exo2.styles';

const exo2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Inscription </Text>
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-photo/side-view-red-fox-looking-260nw-2187373047.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.form}>
        <TextInput placeholder="Nom" style={styles.input} />
        <TextInput placeholder="Prénom" style={styles.input} />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirmer le mot de passe"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => Alert.alert('Inscription', 'Inscription réussie !')}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exo2;
