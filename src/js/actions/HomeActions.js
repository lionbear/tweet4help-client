import {TITLE_CHANGED,ADD_EVENT,REMOVE_EVENT,INIT_MAP} from '../constants/ActionTypes';

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}

export function addEvent(id,lat,lng,time,flags) {
  return {
    type: ADD_EVENT,
    id,
    lat,
    lng,
    time,
    flags
  }
}

export function removeEvent(index) {
  return {
    type: REMOVE_EVENT,
    index
  }
}

export function initMap(map) {
  return {
    type: INIT_MAP,
    map
  }
}
