import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: <HeaderButtons></HeaderButtons>
  };
};

export default PlacesListScreen;
