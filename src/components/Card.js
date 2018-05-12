import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import cardStyles from '../styles/Card';

export default class Card extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    titleLines: PropTypes.number,
    contentLines: PropTypes.number,
    handler: PropTypes.func
  };
  static defaultProps = {
    containerStyle: {},
    style: {},
    titleLines: 1,
    contentLines: 12,
    handler: () => ({})
  };
  render() {
    let {
      containerStyle, style, title, content, titleLines, contentLines, handler
    } = this.props;
    return (
      <TouchableOpacity style ={containerStyle} onPress={handler}>
        <View>
          <Text style={{fontFamily: 'Roboto', fontSize: 24, fontWeight: 'bold', paddingBottom: 5, paddingTop: 10}} numberOfLines={titleLines}>{title}</Text>
          <Text style={{fontFamily: 'Roboto', fontSize: 14, fontWeight: '100', paddingBottom: 3}} numberOfLines={contentLines}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent('Card', () => Card);
