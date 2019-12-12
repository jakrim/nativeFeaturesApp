import { ADD_PLACE } from '../actions/places';
import Place from '../../models/place';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        new Date().toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        ...state,
        places: state.places.concat(newPlace)
      };

    default:
      return state;
  }
};