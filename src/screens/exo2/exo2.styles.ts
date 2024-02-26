import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 13,
    backgroundColor: '#CCCCCC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 13,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'grey',
  },
});
