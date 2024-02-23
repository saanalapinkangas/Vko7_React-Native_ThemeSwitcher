import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  light: {
    backgroundColor: '#f5f5f5',
    color: '#333'
  },
  dark: {
    backgroundColor: '#333',
    color: '#f5f5f5',
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
})