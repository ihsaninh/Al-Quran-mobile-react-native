import React, { Component } from 'react';
import { UIManager, findNodeHandle, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Colors } from '../../../Themes/Colors';
import { Styles } from '../Style/PopUpMenu.style';

class PopUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };
  }

  onError() {
    // console.log('Popup Error');
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      );
    }
  };

  render() {
    return (
      <Pressable
        onPress={this.onPress}
        style={Styles.moreButton}
        android_ripple={{ color: Colors.ripple, borderless: true }}>
        <Icon
          size={24}
          ref={this.onRef}
          name="more-vertical"
          style={Styles.leftIcon}
        />
      </Pressable>
    );
  }

  onRef = (icon) => {
    if (!this.state.icon) {
      this.setState({ icon });
    }
  };
}

export { PopUpMenu };
