import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps'

import Details from "../Details";

export default function Map({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <MapView
        style={{ flex: 1}}
        region={{
          latitude: -16.6946628,
          longitude: -49.2732931,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
      />
      <Details />
    </View>
  )
}
