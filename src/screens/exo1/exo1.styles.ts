import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  firstPart: {
    backgroundColor: '#FFC0CB',
    flex: 1,
  },
  secondPart: {
    backgroundColor: '#ADD8E6',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thirdPart: {
    backgroundColor: '#FFFACD',
    flex: 3,
  },
  smallCube: {
    backgroundColor: '#FFA07A',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 4,
  },
});
