import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import googleMapsLoader from '../utils/googleMapsLoader';
import io from 'socket.io-client';
import mapMarker from '../utils/mapMarker';

class GoogleMaps extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    container: PropTypes.string.isRequired
  };
  static defaultProps = {
    params : {
      center: {lat:0,lng:0},
      zoom: 8
    },
    container: 'map-container'
  };
  state = {
    map: null,
  };
  mountMap() {
    let mapEl = ReactDOM.findDOMNode(this.refs['map-container']);
    let google = window.google;

    if(google) {
      this.setState({map:new google.maps.Map(mapEl,this.props.params)});
    }
  }
  componentDidMount() {
    let socket = io('http://localhost:3000');
    let self = this;

    socket.on('tweet', function(data) {
      let location = data.coordinates;

      if(location && location.coordinates) {
        let id = data.id;
        let lng = location.coordinates[0];
        let lat = location.coordinates[1];
        let time = data.created_at;
        let flags = null;

        self.props.onNewEvent(id,lng,lat,time,flags);
        mapMarker(self.state.map,lat,lng,time);
      }
    });

    googleMapsLoader(this.mountMap.bind(this));
  }
  render() {
    return (<div className='map-container' ref='map-container'></div>);
  }
}

export default GoogleMaps;
