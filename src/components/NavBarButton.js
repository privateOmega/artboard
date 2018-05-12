import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import buttonStyles from '../styles/NavBarButton';

export default class NavBarButton extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    title: PropTypes.string.isRequired
  };
  static defaultProps = {
    style: {},
    handler: () => ({}),
    disabled: false
  };
  render() {
    let {
      style, handler, disabled, title
    } = this.props;
    return (
      <TouchableOpacity
        style={buttonStyles.navBarButton}
        onPress={handler}
        disabled={disabled}
      >
        <View style={style}>
          <Text style={[buttonStyles.navBarButtonText]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent('NavBarButton', () => NavBarButton);
