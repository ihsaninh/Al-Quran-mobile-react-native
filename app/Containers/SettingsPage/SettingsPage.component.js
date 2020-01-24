import React, { useState } from 'react';
import { View } from 'react-native';

import { Row } from '../../Components/Row/RowComponent';
import { Styles } from './SettingsPage.style';
import { Lists } from '../../Components/Lists/ListsComponent';
import { SwitchComponent } from '../../Components/Switch/SwitchComponent';

const SettingsPage = () => {
  const [switchBtn, setSwitchBtn] = useState(false);
  return (
    <View style={Styles.container}>
      <Row title="Pengaturan Umum">
        <Lists
          title="Nada Notifikasi"
          description="Default (notice_audition.ogg)"
          onPress={() => null}
        />
        <Lists
          title="Ukuran Font Arabic"
          description="17 (klik untuk menyesuaikan)"
          onPress={() => null}
        />
        <Lists
          title="Jenis Huruf Arabic"
          description="LPMQ standar KEMENAG"
          onPress={() => null}
        />
        <SwitchComponent
          value={switchBtn}
          onValueChange={switchValue => setSwitchBtn(switchValue)}
          info={switchBtn ? 'hidup' : 'mati'}
        />
        <Lists
          title="Wallpaper"
          description="Wallpaper default"
          onPress={() => null}
        />
      </Row>
      <Row title="Pengaturan Khusus">
        <Lists
          title="Bantuan"
          description="Butuh pertanyaan? Butuh bantuan?"
          onPress={() => null}
        />
        <Lists
          title="Versi Aplikasi"
          description="1.0-dev"
          onPress={() => null}
        />
      </Row>
    </View>
  );
};

export default SettingsPage;
