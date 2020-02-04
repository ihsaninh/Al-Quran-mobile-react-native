import React, { useState } from 'react';
import { View } from 'react-native';

import { Row } from '../../Components/Row/RowComponent';
import { Lists } from '../../Components/Lists/ListsComponent';
import { Styles } from './SettingsPage.style';
import { Routes } from '../../Navigation/Routes';
import { Strings } from '../../Utils/Strings';
import { ModalOptions } from '../../Components/ModalOptions/ModalOptionsComponent';
import { RadioComponent } from '../../Components/Radio/RadioComponent';
import { SwitchComponent } from '../../Components/Switch/SwitchComponent';

const SettingsPage = ({ navigation }) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lang, setLang] = useState({
    id: {
      language: 'Bahasa Indonesia',
      checked: true,
      code: 'id',
    },
    en: {
      language: 'Bahasa Inggris',
      checked: false,
      code: 'en',
    },
  });

  const toggleSwitch = val => {
    setSwitchBtn(val);
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const radioOnPress = item => () => {
    setLang({
      id: {
        language: 'Bahasa Indonesia',
        checked: item.code === 'id' ? true : false,
        code: 'id',
      },
      en: {
        language: 'Bahasa Inggris',
        checked: item.code === 'en' ? true : false,
        code: 'en',
      },
    });
    setIsVisible(!isVisible);
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

  const renderModalOptions = () => {
    const langs = Object.keys(lang);
    return (
      <ModalOptions
        type="Pilih Bahasa Aplikasi"
        onPress={toggleModal}
        isVisible={isVisible}
        onPressCancel={toggleModal}>
        {langs.map((item, i) => (
          <RadioComponent
            key={i}
            text={lang[item].language}
            value={lang[item]}
            status={lang[item].checked ? 'checked' : 'unchecked'}
            onPress={radioOnPress(lang[item])}
            radioOnpress={radioOnPress(lang[item])}
          />
        ))}
      </ModalOptions>
    );
  };

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
