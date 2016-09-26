import { Meteor } from 'meteor/meteor';
import Places from '/imports/api/Places.js';

Meteor.publish("places/nearby", function(coords) {
  check(coords, {lat: Number, lng: Number})
  let places = Places.aggregate([
    { "$geoNear": {
        "near": {
            "type": "Point",
            "coordinates": [ coords.lng, coords.lat ]
        }, 
        "maxDistance": 500 * 1609,
        "spherical": true,
        "distanceField": "distance",
        "distanceMultiplier": 0.000621371
    }}
  ]);
  _.each(places, (place) => {
    this.added('places', place._id, place);
  })
  this.ready();
});

Meteor.publish("places/one", function(id) {
  check(id, String);
  return Places.find({_id: id});
});
