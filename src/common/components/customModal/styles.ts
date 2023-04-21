import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 30,
  },
  modalView: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    height: 200,
  },
  button: {
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 10,
    elevation: 2,
    backgroundColor: '#2E2E2E',
    position: 'absolute',
    bottom: 0,
    width: '50%',
  },
  buttonText: {
    fontSize: 16,
    color: '#F2F2F2',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#2e2e2e',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export { styles };
