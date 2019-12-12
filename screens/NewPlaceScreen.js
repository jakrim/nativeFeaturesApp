import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderTitle } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import * as placesActions from '../store/actions/places';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitle(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.ADD_PLACE(title));
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={title}
        />
        <Button
          title='Save Place'
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    HeaderTitle: 'Add Place'
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;
