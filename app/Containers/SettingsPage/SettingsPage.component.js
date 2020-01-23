import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { Styles } from './SettingsPage.style';

const SettingsRow = props => {
  const { children, title } = props;
  return (
    <View style={Styles.rowContainer}>
      <Text style={Styles.rowTitle}>{title}</Text>
      <View>
        <View>{children}</View>
      </View>
    </View>
  );
};

const SettingsList = props => {
  const { title, description, onPress } = props;
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .05)"
      centered>
      <View style={Styles.settingListContainer}>
        <Text style={Styles.settingListTitle}>{title}</Text>
        <Text style={Styles.settingListSubTitle}>{description}</Text>
      </View>
    </TouchableRipple>
  );
};

const SettingsPage = () => {
  return (
    <View style={Styles.container}>
      <SettingsRow title="Pengaturan Umum">
        <SettingsList
          title="Nada Notifikasi"
          description="Default (notice_audition.ogg)"
          onPress={() => null}
        />
        <SettingsList
          title="Ukuran Font"
          description="17 (klik untuk menyesuaikan)"
          onPress={() => null}
        />
        <SettingsList
          title="Jenis Huruf Arabic"
          description="LPMQ standar KEMENAG"
        />
      </SettingsRow>
      <SettingsRow title="Pengaturan Khusus">
        <SettingsList
          title="Wallpaper"
          description="Wallpaper default"
          onPress={() => null}
        />
        <SettingsList
          title="Bantuan"
          description="Butuh pertanyaan? Butuh bantuan?"
          onPress={() => null}
        />
        <SettingsList
          title="Info Aplikasi"
          // description="LPMQ standar KEMENAG"
        />
      </SettingsRow>
    </View>
  );
};

export default SettingsPage;
