import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import GritGlassHeader from '../components/GritGlassHeader';
import BackgroundImage from '../assets/background.png';
import Handball from '../assets/hockey.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <Image source={Handball} style={styles.image} />

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <GritGlassHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NHL', '03.05 19:00', 'New York Rangers \n' + 'Toronto Maple Leafs')}
        {renderBroadcast('KHL', '06.05 18:30', 'Ak Bars \n' + 'CSKA Moscow')}
        {renderBroadcast('IIHF World', '09.05 20:00', 'Sweden \n' + 'Finland')}
        {renderBroadcast('SHL', '12.05 19:45', 'Lulea \n' + 'Djurgarden')}
        {renderBroadcast('Liiga', '15.05 17:30', 'HIFK \n' + 'Ilves')}
        {renderBroadcast('DEL', '18.05 21:00', 'Adler Mannheim \n' + 'Eisbären Berlin')}
        {renderBroadcast('NLA', '21.05 20:15', 'ZSC Lions \n' + 'SC Bern')}
        {renderBroadcast('CHL', '24.05 19:00', 'EV Zug \n' + 'Frolunda')}
        {renderBroadcast('AHL', '27.05 22:00', 'Hershey Bears \n' + 'Providence Bruins')}
        {renderBroadcast('Olympics', '31.05 16:30', 'Canada \n' + 'USA')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 20,
    paddingLeft: 20,
    borderRadius: 25,
    borderColor: COLORS.main,
    borderWidth: 2,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.main,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  image: {
    width: 50,
    height: 60,
    objectFit: 'contain',
  },
});
