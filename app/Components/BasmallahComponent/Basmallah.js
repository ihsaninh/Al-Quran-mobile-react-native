import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import CardView from 'react-native-cardview';
import HTML from 'react-native-render-html';
import { Styles } from './Basmallah.styles';
import { quranBasmallah } from '../../Utils/EndPoints';

class Basmallah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.renderBasmallah();
  }

  renderBasmallah = async () => {
    try {
      const res = await axios.get(quranBasmallah);
      const data = res.data.data[0];
      this.setState({
        data,
      });
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { data } = this.state;
    return (
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={Styles.CardStyle}>
        <View>
          <Text style={Styles.descTextArabic}>{data.aya_text}</Text>
        </View>
      </CardView>
    );
  }
}

export default Basmallah;
