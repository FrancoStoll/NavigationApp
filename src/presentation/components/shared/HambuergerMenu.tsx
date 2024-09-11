import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable} from 'react-native';
import {IonIcon} from './IonIcon';

export const HambuergerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" />
        </Pressable>
      ),
    });
  }, []);
  return <></>;
};
