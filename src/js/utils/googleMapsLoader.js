import $script from 'scriptjs';

export default function googleMapsLoader(cb,queryKeys = '') {
    $script(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAdrhLHVdOTS0VNGeTJ5W1HkKQVGmG3H5s',
      () => { console.log('gmaps loaded'); cb(); }
    );
}

/*const _customPromise = new Promise(resolve => {
  resolveCustomPromise = resolve;
});

export default function googleMapsLoader(queryKeys = '') {
  if(!$script) {
    $script = require('scriptjs');
  }
console.log('gmaps loader init');
  loadPromise = new Promise((resolve,reject) => {
    if(typeof window === 'undefined') {
      reject(new Error('No window object.'))
    }
console.log('test one');
    if(window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }
console.log('test two');
    if(typeof window._googleMapsError_ !== 'undefined') {
      reject(new Error('Map not initialized'));
    }
console.log('test three');
    window._googleMapsError_ = () => {
      delete window._googleMapsError_;
      resolve(window.google.maps);
    };
console.log('test four');
    if(queryKeys) {
      let queryString = '';
      for(key in queryKeys) {
        queryString += (key) => `&${key}=${queryKeys[key]}`
      }
    }
console.log('test five');
console.log($script);
    $script(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyAdrhLHVdOTS0VNGeTJ5W1HkKQVGmG3H5s${queryKeys}`,
      () => console.log('gmaps loaded')
    );
  });

  resolveCustomPromise(loadPromise);
console.log('test for google obj after promise',window.google);
  return loadPromise;
}
*/
