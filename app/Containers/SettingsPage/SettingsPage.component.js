import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple, RadioButton } from 'react-native-paper';

import { Row } from '../../Components/Row/RowComponent';
import { Lists } from '../../Components/Lists/ListsComponent';
import { Styles } from './SettingsPage.style';
import { Routes } from '../../Navigation/Routes';
import { Strings } from '../../Utils/Strings';
import { ModalOptions } from '../../Components/ModalOptions/ModalOptionsComponent';
import { SwitchComponent } from '../../Components/Switch/SwitchComponent';

const SettingsPage = ({ navigation }) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSwitch = val => {
    setSwitchBtn(val);
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const languageLists = [
    {
      name: 'Bahasa Indonesia',
      value: 'ID',
      checked: true,
    },
    {
      name: 'Bahasa Inggris',
      value: 'EN',
      checked: false,
    },
    {
      name: 'Bahasa Jawa',
      value: 'JW',
      checked: false,
    },
  ];

  const renderModalOptions = () => {
    return (
      <ModalOptions
        type="Pilih Bahasa Aplikasi"
        onPress={toggleModal}
        isVisible={isVisible}
        onPressCancel={toggleModal}>
        {languageLists.map((item, i) => (
          <TouchableRipple
            onPress={toggleModal}
            rippleColor="rgba(0, 0, 0, .05)"
            centered>
            <View style={Styles.modalOptionsContent}>
              <Text style={Styles.radioText}>{item.name}</Text>
              <RadioButton
                value={item.value}
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={toggleModal}
                color="#009688"
              />
            </View>
          </TouchableRipple>
        ))}
      </ModalOptions>
    );
  };

  const GeneralSettings = [
    {
      title: 'Ukuran Font Arabic',
      description: '17 px (klik untuk menyesuaikan)',
      onPress: () => toggleModal(),
    },
    {
      title: 'Jenis Huruf Arabic',
      description: 'LPMQ standar KEMENAG',
      onPress: () => toggleModal(),
    },
    {
      title: 'Bahasa Aplikasi',
      description: 'Bahasa Indonesia',
      onPress: () => toggleModal(),
    },
  ];

  const OtherSettings = [
    {
      title: 'Bantuan',
      description: 'Butuh pertanyaan? Butuh bantuan?',
      onPress: () => toggleModal(),
    },
    {
      title: 'Versi Aplikasi',
      description: '1.0',
      onPress: () => navigation.navigate(Routes.AboutPage),
    },
  ];

  return (
    <View style={Styles.container}>
      <Row title={Strings.generalSettings}>
        {GeneralSettings.map((item, i) => (
          <Lists
            key={i}
            title={item.title}
            description={item.description}
            onPress={item.onPress}
          />
        ))}
        <SwitchComponent
          title="Mode Gelap"
          description={switchBtn ? 'Mode gelap hidup' : 'Mode gelap mati'}
          value={switchBtn}
          onValueChange={toggleSwitch}
        />
      </Row>
      <Row title={Strings.otherSetting}>
        {OtherSettings.map((item, i) => (
          <Lists
            key={i}
            title={item.title}
            description={item.description}
            onPress={item.onPress}
          />
        ))}
      </Row>
      {renderModalOptions()}
    </View>
  );
};

export default SettingsPage;
