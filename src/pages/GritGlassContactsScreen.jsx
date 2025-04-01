import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import GritGlassHeader from '../components/GritGlassHeader';
import GritGlassComponent from '../components/GritGlassComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'GritGlassHomeScreen'});
  };

  const renderTextInput = (placeholder, value = '') => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.white}
        editable={false}
        value={value}
      />
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <GritGlassHeader />

      <Text style={styles.title}>Контакты</Text>

      <ScrollView contentContainerStyle={styles.main}>
        {renderTextInput('Номер', '+7 915 123-45-67')}
        {renderTextInput('Адрес', 'ул. Гагарина, д. 12б')}
        {renderTextInput('Данные', 'Санкт-Петербург 191186 Россия')}
        {renderTextInput('Индекс', '190000')}

        <GritGlassComponent
          text="На главную"
          style={styles.button}
          onPress={handleNavigateHome}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    width: '100%',
    paddingLeft: 30,
    marginVertical: 10,
  },
  main: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 25,
    height: height * 0.55,
    paddingBottom: 100,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 60,
    width: '100%',
    fontSize: 14,
    fontFamily: FONTS.bold,
    textAlign: 'left',
    color: COLORS.white,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: COLORS.main,
  },
  button: {
    marginTop: 100,
  },
});
