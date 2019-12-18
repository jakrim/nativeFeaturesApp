import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

import { useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './HeaderButton';

const PlaceItem = props => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5
  },
  address: {
    color: '#666',
    fontSize: 14
  },
  button: {
    marginHorizontal: 3
  }
});

export default PlaceItem;
