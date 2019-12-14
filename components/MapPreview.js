import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ENV from '../env';

const MapPreview = props => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
  }
  console.log('TCL: imagePreviewUrl', imagePreviewUrl);

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <MapPreview>
          provider={PROVIDER_GOOGLE}
          region=
          {{
            latitude: props.location.lat,
            longitude: props.location.lng
            //  latitudeDelta: 0.015,
            //  longitudeDelta: 0.0121,
          }}
        </MapPreview>
      ) : (
        // <Image style={styles.mapimage} source={{ uri: imagePreviewUrl }} />
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  }
});

export default MapPreview;
