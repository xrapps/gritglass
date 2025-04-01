import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import GritGlassHomeScreen from './pages/GritGlassHomeScreen';
import GritGlassCartScreen from './pages/GritGlassCartScreen';
import GritGlassCartSuccessScreen from './pages/GritGlassCartSuccessScreen';
import GritGlassReservationScreen from './pages/GritGlassReservationScreen';
import GritGlassReservationSuccessScreen from './pages/GritGlassReserveSuccessScreen';
import GritGlassContactsScreen from './pages/GritGlassContactsScreen';
import GritGlassTranslationsScreen from './pages/GritGlassTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'МЕНЮ', screen: 'GritGlassHomeScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'GritGlassTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'GritGlassContactsScreen'},
    {label: 'БРОНЬ СТОЛИКА', screen: 'GritGlassReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('GritGlassCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'GritGlassHomeScreen', component: GritGlassHomeScreen},
  {name: 'GritGlassCartScreen', component: GritGlassCartScreen},
  {
    name: 'GritGlassCartSuccessScreen',
    component: GritGlassCartSuccessScreen,
  },
  {
    name: 'GritGlassReservationScreen',
    component: GritGlassReservationScreen,
  },
  {
    name: 'GritGlassReservationSuccessScreen',
    component: GritGlassReservationSuccessScreen,
  },
  {name: 'GritGlassContactsScreen', component: GritGlassContactsScreen},
  {
    name: 'GritGlassTranslationsScreen',
    component: GritGlassTranslationsScreen,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor :COLORS.white,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: COLORS.main,
  },
  logo: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: '8%',
    alignItems: 'center',
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 25,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: COLORS.main,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  itemText: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
  },
  cartIcon: {
    width: 80,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
