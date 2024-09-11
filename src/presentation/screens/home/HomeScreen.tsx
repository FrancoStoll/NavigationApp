
import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import {
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import type { RootStackParams } from '../../routes/StackNavigator';
import { HambuergerMenu } from '../../components/shared/HambuergerMenu';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

 

  return (
    <View style={globalStyles.container}>
      <HambuergerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
}
