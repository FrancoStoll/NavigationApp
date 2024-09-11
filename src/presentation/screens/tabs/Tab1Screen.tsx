import {View} from 'react-native';
import {HambuergerMenu} from '../../components/shared/HambuergerMenu';
import {IonIcon} from '../../components/shared/IonIcon';

export function Tab1Screen() {
  return (
    <View>
      <HambuergerMenu />

      <IonIcon name="rocket-outline" />
    </View>
  );
}
