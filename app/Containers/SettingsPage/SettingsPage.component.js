import React, { useState } from 'react';
import { View, Linking } from 'react-native';

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
  const [modalFontVisible, setModalFontVisible] = useState(false);
  const [modalLangVisible, setModalLangVisible] = useState(false);
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
  const [font, setFont] = useState({
    lpmq: {
      name: 'LPMQ Standar KEMENAG',
      checked: true,
      code: 'lpmq',
    },
    ar: {
      name: 'Arabic Font Standar Utsmani',
      checked: false,
      code: 'ar',
    },
  });

  const toggleSwitch = val => {
    setSwitchBtn(val);
  };

  const toggleModalFont = () => {
    setModalFontVisible(!modalFontVisible);
  };

  const toggleModalLang = () => {
    setModalLangVisible(!modalLangVisible);
  };

  const onPressHelp = () => {
    Linking.openURL('https://apple.com');
  };

  const radioOnPressLang = item => () => {
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
    setModalLangVisible(!modalLangVisible);
  };

  const radioOnPressFont = item => () => {
    setFont({
      lpmq: {
        name: 'LPMQ Standar KEMENAG',
        checked: item.code === 'lpmq' ? true : false,
        code: 'lpmq',
      },
      ar: {
        name: 'Arabic Font Standar Utsmani',
        checked: item.code === 'ar' ? true : false,
        code: 'ar',
      },
    });
    setModalFontVisible(!modalFontVisible);
  };

  const GeneralSettings = [
    {
      title: 'Jenis Huruf Arabic',
      description: 'LPMQ standar KEMENAG',
      onPress: () => toggleModalFont(),
    },
    {
      title: 'Bahasa Aplikasi',
      description: 'Bahasa Indonesia',
      onPress: () => toggleModalLang(),
    },
  ];

  const OtherSettings = [
    {
      title: 'Bantuan',
      description: 'Butuh pertanyaan? Butuh bantuan?',
      onPress: onPressHelp,
    },
    {
      title: 'Versi Aplikasi',
      description: '1.0',
      onPress: () => navigation.navigate(Routes.AboutPage),
    },
  ];

  const renderModalOptionsLang = () => {
    const langs = Object.keys(lang);
    return (
      <ModalOptions
        type="Pilih Bahasa Aplikasi"
        onBackdropPress={toggleModalLang}
        isVisible={modalLangVisible}
        onPressCancel={toggleModalLang}>
        {langs.map((item, i) => (
          <RadioComponent
            key={i}
            text={lang[item].language}
            value={lang[item]}
            status={lang[item].checked ? 'checked' : 'unchecked'}
            onPress={radioOnPressLang(lang[item])}
            radioOnpress={radioOnPressLang(lang[item])}
          />
        ))}
      </ModalOptions>
    );
  };

  const renderModalOptionsHuruf = () => {
    const fonts = Object.keys(font);
    return (
      <ModalOptions
        type="Pilih Jenis Huruf Arabic"
        onBackdropPress={toggleModalFont}
        isVisible={modalFontVisible}
        onPressCancel={toggleModalFont}>
        {fonts.map((item, i) => (
          <RadioComponent
            key={i}
            text={font[item].name}
            value={font[item]}
            status={font[item].checked ? 'checked' : 'unchecked'}
            onPress={radioOnPressFont(font[item])}
            radioOnpress={radioOnPressFont(font[item])}
          />
        ))}
      </ModalOptions>
    );
  };

  const renderSettingLists = () => {
    return (
      <View>
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
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      {renderSettingLists()}
      {renderModalOptionsLang()}
      {renderModalOptionsHuruf()}
    </View>
  );
};

export default SettingsPage;
