import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from './AboutPage.style';

const AboutPage = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.appName}>Al-Quran Mobile</Text>
      <Text style={Styles.appVersion}>Version 1.0</Text>
      <Text style={Styles.appAuthor}>Ihsan Nurul Habib</Text>
    </View>
  );
};

export default AboutPage;
