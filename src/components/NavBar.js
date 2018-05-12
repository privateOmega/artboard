import React, { Component } from 'react';
import { Text, View, StatusBar, Platform, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import NavBarButton from './NavBarButton';
import navbarStyles from '../styles/NavBar';

export default class NavBar extends Component {
  static propTypes = {
    containerStyle: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    statusBarHidden: PropTypes.bool,
    title: PropTypes.string.isRequired,
    rightButton: PropTypes.string,
    handler: PropTypes.func
  };
  static defaultProps = {
    containerStyle: {},
    style: {},
    statusBarHidden: false,
    rightButton: null,
    handler: () => ({})
  };
  render() {
    let statusBar = null;
    let { containerStyle, style, title, rightButton, handler } = this.props;
    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBarHidden ? (
        <StatusBar backgroundColor="blue" barStyle="light-content" />
      ) : null;
    }
    return (
      <View style={[navbarStyles.navBarContainer, containerStyle]}>
        {statusBar}
        <View style={[navbarStyles.navBar, style]}>
          <Text style={navbarStyles.navBarTitleText}>{title}</Text>
          {!this.props.rightButton ? null : <NavBarButton title={this.props.rightButton} handler={handler} />}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('NavBar', () => NavBar);
