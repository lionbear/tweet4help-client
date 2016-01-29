import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  markers: []
};

export function events(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_EVENT:
      return [
          ...state,
          {
            id: action.id,
            coordinates: { lat: action.lat, lng: action.lng },
            time: action.time,
            flags: action.flags
          }
        ];
    case ActionTypes.REMOVE_EVENT:
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function map(state = null,action) {
  switch (action.type) {
    case ActionTypes.INIT_MAP:
      return action.map;
    default:
      return state;
  }
}
