import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  closeLineContainer: {
    alignSelf: 'center',
  },
  routeNameText: {
    fontSize: 10.5,
    fontFamily: 'Inter-Regular',
    lineHeight: 14,
    flex: 1,
    alignSelf: 'center',
    marginTop: 9,
  },
  explorebutton: {
    flex: 1,
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#E8E8E8',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  exploreText: {
    fontSize: 10.5,
    fontFamily: 'Inter-Regular',
    lineHeight: 14,
    alignSelf: 'center',
    marginTop: 7,
  },
});
