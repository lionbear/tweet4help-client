import moment from 'moment';

export default function(map = null,lat = 0,lng = 0,time = 0) {
  let google = window.google;

  if(google && map) {
    let position = {lat: lat, lng: lng};
    console.log('marker created at',position);
    let marker = new google.maps.Marker({
      position: position,
      map: map,
      title: 'Map marker'
    });

    let infoBox = new google.maps.InfoWindow({
      content: '<div class="info-box"></div>'
    });
    marker.addListener('click',() => {
      infoBox.setContent('<div class="info-box">' + moment(time).fromNow() + '</div>');
      infoBox.open(map,marker);
    });
  }
}
