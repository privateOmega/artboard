import { StyleSheet } from 'react-native';

const NAV_BAR_HEIGHT = 55;

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: 'white'
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    backgroundColor: '#f5f5f5',
    paddingLeft: 8,
    paddingRight: 8,
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#626262',
    fontWeight: '500',
    textAlign: 'center'
  }
});

module.exports = styles;
