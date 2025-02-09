import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {AboutScreen} from '../screens/about/AboutScreen';
import {HambuergerMenu} from '../components/shared/HambuergerMenu';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {
  return (
    <>
      <HambuergerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}
