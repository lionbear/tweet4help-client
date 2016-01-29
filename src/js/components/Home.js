import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../scss/app.scss';
import GoogleMaps from './GoogleMaps';
import * as MapParameters from '../constants/MapParameters';
//import * as reducers from '../reducers/reducers';

class Home extends Component {
  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <GoogleMaps
          params={MapParameters}
          onNewEvent={(id,lat,lng,time,flags) =>
            dispatch(HomeActions.addEvent(id,lat,lng,time,flags))
          }
        />
      </main>
    );
  }
}

export default connect()(Home)
