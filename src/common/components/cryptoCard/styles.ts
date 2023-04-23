import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: '#DDDDDD',
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  coin: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flexGrow: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  right: {
    flexGrow: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  textSymbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8F8F8B',
  },
});
