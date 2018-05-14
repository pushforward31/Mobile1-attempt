 import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header.js';
import EventCards from './components/EventCards.js'
import Mapbox from '@mapbox/react-native-mapbox-gl';
import TextModule from './components/TextModule.js';
import SwipeCards from './components/SwipeCards.js';
import createProfilemodule from './components/createProfilemodule.js';
import Profilemodule from './components/Profilemodule.js';
import Swiper from 'react-native-swiper';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Swiper
            showsPagination={false}
            loop={false}
            index={1}>
            
            <View style={styles.slide}>
                <View style={styles.mainContainer}>
                  <Profilemodule/>
                </View>
              <View style={styles.footer}>
                <Text style={styles.pageName}>Profile</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <View style={styles.mainContainer}>
                <Mapbox.MapView style={styles.map}>
                </Mapbox.MapView>
                <SwipeCards style={styles.cards} />
              </View>
              <View style={styles.footer}>
                <Text style={styles.pageName}>Splash</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <View style={styles.mainContainer}>
                <TextModule />
              </View>
              <View style={styles.footer}>
                <Text style={styles.pageName}>Event</Text>
              </View>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 9,
  },
  slide: {
    flex: 9,
    zIndex: 1,
  },
  mainContainer: {
    flex: 9,
    zIndex: 5
  },
  map: {
    flex: 1
  },
  cards: {
    flex: 1,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pageName: {
    fontSize: 50
  }
});
