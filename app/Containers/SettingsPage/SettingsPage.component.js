import React, { useState, Fragment } from 'react';
import { View, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from 'i18next';

import { Styles } from './SettingsPage.style';
import { Routes } from '../../Navigation/Routes';
import { Row } from '../../Components/Row/RowComponent';
import { Constants } from '../../Utils/Constants';
import { Lists } from '../../Components/Lists/ListsComponent';
import { setLang } from '../../Redux/Actions/Language/Language';
import { changeLanguage } from '../../Utils/Translation';
import { RadioComponent } from '../../Components/Radio/RadioComponent';
import { SwitchComponent } from '../../Components/Switch/SwitchComponent';
import { ModalOptions } from '../../Components/ModalOptions/ModalOptionsComponent';

const SettingsPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [switchBtn, setSwitchBtn] = useState(false);
  const [modalLangVisible, setModalLangVisible] = useState(false);
  const { language } = useSelector(state => ({
    language: state.language.language,
  }));

  const toggleSwitch = val => {
    setSwitchBtn(val);
  };

  const toggleModalLang = () => {
    setModalLangVisible(!modalLangVisible);
  };

  const onPressHelp = () => {
    Linking.openURL('https://apple.com');
  };

  const setLanguage = lang => async () => {
    Promise.all([
      changeLanguage(lang),
      AsyncStorage.setItem('userLanguage', lang),
      dispatch(setLang(lang)),
    ]);
    setModalLangVisible(!modalLangVisible);
  };

  const GeneralSettings = [
    {
      title: I18n.t('FontType'),
      description: 'LPMQ standar KEMENAG',
      // eslint-disable-next-line no-alert
      onPress: () => alert('Nothing work here'),
    },
    {
      title: I18n.t('AppLanguage'),
      description: language === 'id' ? I18n.t('Indonesian') : I18n.t('English'),
      onPress: () => toggleModalLang(),
    },
  ];

  const OtherSettings = [
    {
      title: I18n.t('Help'),
      description: I18n.t('HelpDesc'),
      onPress: onPressHelp,
    },
    {
      title: I18n.t('AppVersion'),
      description: '1.0',
      onPress: () => navigation.navigate(Routes.AboutPage),
    },
  ];

  const renderModalOptionsLang = () => {
    const { LangLists } = Constants;
    return (
      <ModalOptions
        type={I18n.t('ChooseLanguage')}
        isVisible={modalLangVisible}
        onPressCancel={toggleModalLang}>
        {LangLists.map((item, i) => (
          <RadioComponent
            key={i}
            text={item.title}
            value={item.langId}
            status={language === item.langId ? 'checked' : 'unchecked'}
            onPress={setLanguage(item.langId)}
            radioOnpress={setLanguage(item.langId)}
          />
        ))}
      </ModalOptions>
    );
  };

  const renderSettingLists = () => {
    return (
      <Fragment>
        <Row title={I18n.t('GeneralSettings')}>
          {GeneralSettings.map((item, i) => (
            <Lists
              key={i}
              title={item.title}
              description={item.description}
              onPress={item.onPress}
            />
          ))}
          <SwitchComponent
            title={I18n.t('DarkMode')}
            description={
              switchBtn ? I18n.t('DarkModeOn') : I18n.t('DarkModeOff')
            }
            value={switchBtn}
            onValueChange={toggleSwitch}
          />
        </Row>
        <Row title={I18n.t('OtherSetting')}>
          {OtherSettings.map((item, i) => (
            <Lists
              key={i}
              title={item.title}
              description={item.description}
              onPress={item.onPress}
            />
          ))}
        </Row>
      </Fragment>
    );
  };

  return (
    <View style={Styles.container}>
      {renderSettingLists()}
      {renderModalOptionsLang()}
    </View>
  );
};

export default SettingsPage;

SettingsPage.navigationOptions = () => ({
  title: I18n.t('SettingsTitle'),
});
